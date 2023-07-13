document.getElementById("Submit").addEventListener('click',myWindow)
function myWindow()
{
    visitor = document.getElementById("Name").value;
myText = ("<html>\n<head>\n<title>Welcome</title>\n</head>\n<body>\n");
    myText += ("Hello " + visitor);

flyWindow = window.open('about:blank','myPop','width=400,height=200,left=200,top=200');
flyWindow.document.write(myText);
}
