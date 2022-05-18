# Issues for Windows Users

- restricted access
```
npm.ps1 cannot be loaded because running scripts is disabled on this system. For more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
At line:1 char:1
+ npm start
```
the fix:
```
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted
```