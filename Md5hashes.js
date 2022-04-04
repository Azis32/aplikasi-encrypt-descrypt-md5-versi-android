saya

fungsi  OnStart ()
{

    lay = app.CreateLayout( "linear", "VCenter,FillXY" )    

   
    edtPass = app.CreateTextEdit( "password", 0.8 )
    lay.AddChild( edtPass )

    
    edt = app.CreateTextEdit( "input text", 0.8, 0.3 )
    edt.SetMargins( 0,0.1,0,0 )
    lay.AddChild( edt )
    
    
    btnEncrypt = app.CreateButton( "Encrypt", 0.3 )
    btnEncrypt.SetOnTouch( btnEncrypt_OnTouch )
    lay.AddChild( btnEncrypt )

   
    btnDecrypt = app.CreateButton( "Decrypt", 0.3 )
    btnDecrypt.SetOnTouch( btnDecrypt_OnTouch )
    lay.AddChild( btnDecrypt )
    
    
    btnHash = app.CreateButton( "Hash", 0.3 )
    btnHash.SetOnTouch( btnHash_OnTouch )
    lay.AddChild( btnHash )
    
       
    app.AddLayout( lay )
    
    
    crypt = app.CreateCrypt()
}


function btnEncrypt_OnTouch()
{ 
    //Get password and text.
    var pass = edtPass.GetText()
    var txt = edt.GetText()
    
    
    var txt = crypt.Encrypt( txt, pass )
    edt.SetText( txt )
}


function btnDecrypt_OnTouch()
{
    
    var pass = edtPass.GetText()
    var txt = edt.GetText()
    
    
    txt = crypt.Decrypt( txt, pass )
    edt.SetText( txt )
}


function btnHash_OnTouch()
{
    var pass = edtPass.GetText()
    var md5 = crypt.Hash( pass, "MD5") 
    app.ShowPopup( md5 )
}

