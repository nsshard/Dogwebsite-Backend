const Commentmsg = require('../model/Comments');

const getAllCommentmsgs = async (req, res) => {
    const commentmsgs = await Commentmsg.find();
    if (!commentmsgs) return res.status(204).json({ 'message': 'No comments found.' });
    res.json(commentmsgs);
}

const createNewCommentmsg = async (req, res) => {
    if (!req?.body?.name || !req?.body?.commentmsg) {
        return res.status(400).json({ 'message': 'One or more fields are lacking' });
    }

    try {
        const result = await Commentmsg.create({
           name: req.body.name,
           commentmsg: req.body.commentmsg
        });

        res.status(201).json(result);
    } catch (err) {
        console.error(err);
    }
}

const deleteCommentmsg = async (req, res) => {
    if (!req?.body?.id) {
        return res.status(400).json({ 'message': 'ID parameter is required.' });
    }

    const commentmsg = await Commentmsg.findOne({ _id: req.body.id }).exec();
    if (!commentmsg) {
        return res.status(204).json({ "message": `No comment matches ID ${req.body.id}.` });
    }
    const result = await commentmsg.deleteOne(); //{ _id: req.body.id }
    res.json(result);
}



module.exports = {
    getAllCommentmsgs,
    createNewCommentmsg,
    deleteCommentmsg,
    
}