import { type NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
	try {
		let transporter = nodemailer.createTransport({
			host: 'smtp.sendgrid.net',
			port: 587,
			auth: {
				user: 'apikey',
				pass: process.env.SENDGRID_API_KEY,
			},
		})

		const {
			data: { email, username, message },
		} = await request.json()

		transporter.sendMail(
			{
				from: 'jordan533@o2.pl', // verified sender email
				to: email, // recipient email
				subject: 'Test message subject', // Subject line
				text: 'Hello world!', // plain text body
				html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
                 <head>
                  <meta charset="UTF-8">
                  <meta content="width=device-width, initial-scale=1" name="viewport">
                  <meta name="x-apple-disable-message-reformatting">
                  <meta http-equiv="X-UA-Compatible" content="IE=edge">
                  <meta content="telephone=no" name="format-detection">
                  <title>New message</title><!--[if (mso 16)]>
                    <style type="text/css">
                    a {text-decoration: none;}
                    </style>
                    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
                <xml>
                    <o:OfficeDocumentSettings>
                    <o:AllowPNG></o:AllowPNG>
                    <o:PixelsPerInch>96</o:PixelsPerInch>
                    </o:OfficeDocumentSettings>
                </xml>
                <![endif]-->
                  <style type="text/css">
                .rollover:hover .rollover-first {
                  max-height:0px!important;
                  display:none!important;
                  }
                  .rollover:hover .rollover-second {
                  max-height:none!important;
                  display:inline-block!important;
                  }
                  .rollover div {
                  font-size:0px;
                  }
                  u ~ div img + div > div {
                  display:none;
                  }
                  #outlook a {
                  padding:0;
                  }
                  span.MsoHyperlink,
                span.MsoHyperlinkFollowed {
                  color:inherit;
                  mso-style-priority:99;
                  }
                  a.es-button {
                  mso-style-priority:100!important;
                  text-decoration:none!important;
                  }
                  a[x-apple-data-detectors] {
                  color:inherit!important;
                  text-decoration:none!important;
                  font-size:inherit!important;
                  font-family:inherit!important;
                  font-weight:inherit!important;
                  line-height:inherit!important;
                  }
                  .es-desk-hidden {
                  display:none;
                  float:left;
                  overflow:hidden;
                  width:0;
                  max-height:0;
                  line-height:0;
                  mso-hide:all;
                  }
                  .es-button-border:hover > a.es-button {
                  color:#ffffff!important;
                  }
                @media only screen and (max-width:600px) {*[class="gmail-fix"] { display:none!important } p, a { line-height:150%!important } h1, h1 a { line-height:120%!important } h2, h2 a { line-height:120%!important } h3, h3 a { line-height:120%!important } h4, h4 a { line-height:120%!important } h5, h5 a { line-height:120%!important } h6, h6 a { line-height:120%!important } h1 { font-size:30px!important; text-align:left } h2 { font-size:24px!important; text-align:left } h3 { font-size:20px!important; text-align:left } h4 { font-size:24px!important; text-align:left } h5 { font-size:20px!important; text-align:left } h6 { font-size:16px!important; text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:24px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-header-body h4 a, .es-content-body h4 a, .es-footer-body h4 a { font-size:24px!important } .es-header-body h5 a, .es-content-body h5 a, .es-footer-body h5 a { font-size:20px!important } .es-header-body h6 a, .es-content-body h6 a, .es-footer-body h6 a { font-size:16px!important } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body a { font-size:14px!important } .es-content-body p, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body a { font-size:14px!important } .es-infoblock p, .es-infoblock a { font-size:12px!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3, .es-m-txt-c h4, .es-m-txt-c h5, .es-m-txt-c h6 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3, .es-m-txt-r h4, .es-m-txt-r h5, .es-m-txt-r h6 { text-align:right!important } .es-m-txt-j, .es-m-txt-j h1, .es-m-txt-j h2, .es-m-txt-j h3, .es-m-txt-j h4, .es-m-txt-j h5, .es-m-txt-j h6 { text-align:justify!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3, .es-m-txt-l h4, .es-m-txt-l h5, .es-m-txt-l h6 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-m-txt-r .rollover:hover .rollover-second, .es-m-txt-c .rollover:hover .rollover-second, .es-m-txt-l .rollover:hover .rollover-second { display:inline!important } .es-m-txt-r .rollover div, .es-m-txt-c .rollover div, .es-m-txt-l .rollover div { line-height:0!important; font-size:0!important } .es-spacer { display:inline-table } a.es-button, button.es-button { font-size:18px!important } a.es-button, button.es-button { display:inline-block!important } .es-button-border { display:inline-block!important } .es-m-fw, .es-m-fw.es-fw, .es-m-fw .es-button { display:block!important } .es-m-il, .es-m-il .es-button, .es-social, .es-social td, .es-menu { display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .adapt-img { width:100%!important; height:auto!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } .es-social td { padding-bottom:10px } .h-auto { height:auto!important } }
                </style>
                 </head>
                 <body style="width:100%;height:100%;padding:0;Margin:0">
                  <div class="es-wrapper-color" style="background-color:#F6F6F6"><!--[if gte mso 9]>
                            <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                                <v:fill type="tile" color="#f6f6f6"></v:fill>
                            </v:background>
                        <![endif]-->
                   <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#F6F6F6">
                     <tr>
                      <td valign="top" style="padding:0;Margin:0">
                       <table class="es-header" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
                         <tr>
                          <td align="center" style="padding:0;Margin:0">
                           <table class="es-header-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                             <tr>
                              <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-right:20px;padding-left:20px"><!--[if mso]><table style="width:560px" cellpadding="0"
                                            cellspacing="0"><tr><td style="width:180px" valign="top"><![endif]-->
                               <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                 <tr>
                                  <td class="es-m-p0r es-m-p20b" valign="top" align="center" style="padding:0;Margin:0;width:180px">
                                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                     <tr>
                                      <td align="center" style="padding:0;Margin:0"><!--[if mso]><a href="" target="_blank" hidden>
                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="" 
                                style="height:39px; v-text-anchor:middle; width:97px" arcsize="50%" strokecolor="#2cb543" strokeweight="2px" fillcolor="#31cb4b">
                        <w:anchorlock></w:anchorlock>
                        <center style='color:#ffffff; font-family:arial, "helvetica neue", helvetica, sans-serif; font-size:14px; font-weight:400; line-height:14px;  mso-text-raise:1px'>Button</center>
                    </v:roundrect></a>
                <![endif]--><!--[if !mso]--><!-- --><span class="es-button-border msohide" style="border-style:solid;border-color:#2CB543;background:#31CB4B;border-width:0px 0px 2px 0px;display:inline-block;border-radius:30px;width:auto;mso-hide:all"><a href="" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none !important;mso-line-height-rule:exactly;color:#FFFFFF;font-size:18px;padding:10px 20px 10px 20px;display:inline-block;background:#31CB4B;border-radius:30px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:22px !important;width:auto;text-align:center;letter-spacing:0;mso-padding-alt:0;mso-border-alt:10px solid #31CB4B">Button</a></span><!--<![endif]--></td>
                                     </tr>
                                   </table></td>
                                 </tr>
                               </table><!--[if mso]></td><td style="width:20px"></td><td style="width:360px" valign="top"><![endif]-->
                               <table class="es-right" cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                 <tr>
                                  <td align="left" style="padding:0;Margin:0;width:360px">
                                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                     <tr>
                                      <td align="left" style="padding:0;Margin:0"><h1 style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:30px;font-style:normal;font-weight:normal;line-height:36px;color:#333333">Coś tam elo elo</h1></td>
                                     </tr>
                                   </table></td>
                                 </tr>
                               </table><!--[if mso]></td></tr></table><![endif]--></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table>
                       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
                         <tr>
                          <td align="center" style="padding:0;Margin:0">
                           <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                             <tr>
                              <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-right:20px;padding-left:20px">
                               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                 <tr>
                                  <td valign="top" align="center" style="padding:0;Margin:0;width:560px">
                                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                     <tr>
                                      <td align="left" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">Elkooo😀</p></td>
                                     </tr>
                                   </table></td>
                                 </tr>
                               </table></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table>
                       <table class="es-footer" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
                         <tr>
                          <td align="center" style="padding:0;Margin:0">
                           <table class="es-footer-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                             <tr>
                              <td align="left" style="Margin:0;padding-top:20px;padding-right:20px;padding-left:20px;padding-bottom:20px"><!--[if mso]><table style="width:560px" cellpadding="0" 
                                        cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]-->
                               <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                 <tr>
                                  <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:270px">
                                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                     <tr>
                                      <td align="left" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">Type your text and work on its text styles, add merge tags and lists</p></td>
                                     </tr>
                                   </table></td>
                                 </tr>
                               </table><!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]-->
                               <table class="es-right" cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                 <tr>
                                  <td align="left" style="padding:0;Margin:0;width:270px">
                                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                     <tr>
                                      <td align="center" style="padding:0;Margin:0;font-size:0"><img class="adapt-img" src="https://ebbfnio.stripocdn.email/content/guids/cab_pub_7cbbc409ec990f19c78c75bd1e06f215/images/picture_RiX.png" alt="" width="270" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
                                     </tr>
                                   </table></td>
                                 </tr>
                               </table><!--[if mso]></td></tr></table><![endif]--></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table>
                  </div>
                 </body>
                </html>`, // html body
			},
			function (error, info) {
				if (error) {
					return NextResponse.json('Error')
				} else {
					console.log('Email sent: ' + info.response)
				}
			}
		)
		console.log(request.method)
		return NextResponse.json('Email wysłany')
	} catch (error) {
		return NextResponse.json('Error, cos poszłoe nie tak')
	}
}
