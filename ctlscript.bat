@echo off
rem START or STOP Services
rem ----------------------------------
rem Check if argument is STOP or START

if not ""%1"" == ""START"" goto stop

if exist C:\Users\Administrator\Desktop\webAPI work\database\hypersonic\scripts\ctl.bat (start /MIN /B C:\Users\Administrator\Desktop\webAPI work\database\server\hsql-sample-database\scripts\ctl.bat START)
if exist C:\Users\Administrator\Desktop\webAPI work\database\ingres\scripts\ctl.bat (start /MIN /B C:\Users\Administrator\Desktop\webAPI work\database\ingres\scripts\ctl.bat START)
if exist C:\Users\Administrator\Desktop\webAPI work\database\mysql\scripts\ctl.bat (start /MIN /B C:\Users\Administrator\Desktop\webAPI work\database\mysql\scripts\ctl.bat START)
if exist C:\Users\Administrator\Desktop\webAPI work\database\postgresql\scripts\ctl.bat (start /MIN /B C:\Users\Administrator\Desktop\webAPI work\database\postgresql\scripts\ctl.bat START)
if exist C:\Users\Administrator\Desktop\webAPI work\database\apache\scripts\ctl.bat (start /MIN /B C:\Users\Administrator\Desktop\webAPI work\database\apache\scripts\ctl.bat START)
if exist C:\Users\Administrator\Desktop\webAPI work\database\openoffice\scripts\ctl.bat (start /MIN /B C:\Users\Administrator\Desktop\webAPI work\database\openoffice\scripts\ctl.bat START)
if exist C:\Users\Administrator\Desktop\webAPI work\database\apache-tomcat\scripts\ctl.bat (start /MIN /B C:\Users\Administrator\Desktop\webAPI work\database\apache-tomcat\scripts\ctl.bat START)
if exist C:\Users\Administrator\Desktop\webAPI work\database\resin\scripts\ctl.bat (start /MIN /B C:\Users\Administrator\Desktop\webAPI work\database\resin\scripts\ctl.bat START)
if exist C:\Users\Administrator\Desktop\webAPI work\database\jetty\scripts\ctl.bat (start /MIN /B C:\Users\Administrator\Desktop\webAPI work\database\jetty\scripts\ctl.bat START)
if exist C:\Users\Administrator\Desktop\webAPI work\database\subversion\scripts\ctl.bat (start /MIN /B C:\Users\Administrator\Desktop\webAPI work\database\subversion\scripts\ctl.bat START)
rem RUBY_APPLICATION_START
if exist C:\Users\Administrator\Desktop\webAPI work\database\lucene\scripts\ctl.bat (start /MIN /B C:\Users\Administrator\Desktop\webAPI work\database\lucene\scripts\ctl.bat START)
if exist C:\Users\Administrator\Desktop\webAPI work\database\third_application\scripts\ctl.bat (start /MIN /B C:\Users\Administrator\Desktop\webAPI work\database\third_application\scripts\ctl.bat START)
goto end

:stop
echo "Stopping services ..."
if exist C:\Users\Administrator\Desktop\webAPI work\database\third_application\scripts\ctl.bat (start /MIN /B C:\Users\Administrator\Desktop\webAPI work\database\third_application\scripts\ctl.bat STOP)
if exist C:\Users\Administrator\Desktop\webAPI work\database\lucene\scripts\ctl.bat (start /MIN /B C:\Users\Administrator\Desktop\webAPI work\database\lucene\scripts\ctl.bat STOP)
rem RUBY_APPLICATION_STOP
if exist C:\Users\Administrator\Desktop\webAPI work\database\subversion\scripts\ctl.bat (start /MIN /B C:\Users\Administrator\Desktop\webAPI work\database\subversion\scripts\ctl.bat STOP)
if exist C:\Users\Administrator\Desktop\webAPI work\database\jetty\scripts\ctl.bat (start /MIN /B C:\Users\Administrator\Desktop\webAPI work\database\jetty\scripts\ctl.bat STOP)
if exist C:\Users\Administrator\Desktop\webAPI work\database\hypersonic\scripts\ctl.bat (start /MIN /B C:\Users\Administrator\Desktop\webAPI work\database\server\hsql-sample-database\scripts\ctl.bat STOP)
if exist C:\Users\Administrator\Desktop\webAPI work\database\resin\scripts\ctl.bat (start /MIN /B C:\Users\Administrator\Desktop\webAPI work\database\resin\scripts\ctl.bat STOP)
if exist C:\Users\Administrator\Desktop\webAPI work\database\apache-tomcat\scripts\ctl.bat (start /MIN /B /WAIT C:\Users\Administrator\Desktop\webAPI work\database\apache-tomcat\scripts\ctl.bat STOP)
if exist C:\Users\Administrator\Desktop\webAPI work\database\openoffice\scripts\ctl.bat (start /MIN /B C:\Users\Administrator\Desktop\webAPI work\database\openoffice\scripts\ctl.bat STOP)
if exist C:\Users\Administrator\Desktop\webAPI work\database\apache\scripts\ctl.bat (start /MIN /B C:\Users\Administrator\Desktop\webAPI work\database\apache\scripts\ctl.bat STOP)
if exist C:\Users\Administrator\Desktop\webAPI work\database\ingres\scripts\ctl.bat (start /MIN /B C:\Users\Administrator\Desktop\webAPI work\database\ingres\scripts\ctl.bat STOP)
if exist C:\Users\Administrator\Desktop\webAPI work\database\mysql\scripts\ctl.bat (start /MIN /B C:\Users\Administrator\Desktop\webAPI work\database\mysql\scripts\ctl.bat STOP)
if exist C:\Users\Administrator\Desktop\webAPI work\database\postgresql\scripts\ctl.bat (start /MIN /B C:\Users\Administrator\Desktop\webAPI work\database\postgresql\scripts\ctl.bat STOP)

:end

