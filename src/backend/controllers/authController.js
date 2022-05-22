const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var jwts = require('jwt-simple');
const ACCESS_TOKEN_SECRET = '4868f80777e4c7a3c766e61bfb0c3cf163bfcd3a393cccfe159436e13fd6d825f20d62bafc54380889107d2d16ba31eb470363d74943ae384fc60895abc6d4bd'
const REFRESH_TOKEN_SECRET = '20e2bb4414c14e3da72a0323b13e9e2f60f5f17e33e299d09539be1639d16f11e9c142f3472d7ea34ec7946e860402d6ac601239a4461c1f19d522940dea3b9f'
const cookieParser = require('cookie-parser');

const handleLogin = async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required.' });

    const foundUser = await User.findOne({ username: user }).exec();
    if (!foundUser) return res.sendStatus(401); 

    const match = await bcrypt.compare(pwd, foundUser.password);
    if (match) {
        const staffcode = String(foundUser.staffcode);
        
        const accessToken = jwt.sign(
            {
                "UserInfo": {
                    "username": foundUser.username,
                    "staffcode": foundUser.staffcode
                }
            },
           ACCESS_TOKEN_SECRET,
            { expiresIn: '1d' }
        );
        const refreshToken = jwt.sign(
            { "username": foundUser.username,
            "staffcode": foundUser.staffcode },
            REFRESH_TOKEN_SECRET,
            { expiresIn: '2d' }
        );
       
        foundUser.refreshToken = refreshToken;
        const result = await foundUser.save();
        console.log(result);
        console.log(foundUser.staffcode);
        var decoded = jwts.decode(refreshToken, REFRESH_TOKEN_SECRET);
        console.log(decoded);
        
       
        res.cookie('jwt', refreshToken, { httpOnly: true, secure: true, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 });

        res.json({ staffcode, accessToken });

    } else {
        res.sendStatus(401);
    }
}

module.exports = { handleLogin};