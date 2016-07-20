!function(a){"use strict";var e=[];a(document).on("click","#enable",function(e){e.preventDefault(),e.stopPropagation(),a("#user .editable").editable("toggleDisabled")}),a.fn.editable.defaults.mode="inline",a.fn.editable.defaults.url="/post",a.fn.editableform.buttons='<button type="submit" class="btn btn-primary editable-submit"><i class="material-icons">check</i></button><button type="button" class="btn btn-default editable-cancel"><i class="material-icons">close</i></button>',a.fn.editabletypes.address.defaults=a.extend({},a.fn.editabletypes.abstractinput.defaults,{tpl:'<div class="editable-address"><label><span>City: </span><input type="text" name="city" class="form-control"></label></div><div class="editable-address"><label><span>Street: </span><input type="text" name="street" class="form-control"></label></div><div class="editable-address"><label><span>Building: </span><input type="text" name="building" class="form-control"></label></div>'}),a("#username").editable({url:"/post",type:"text",pk:1,name:"username",title:"Enter username"}),a("#firstname").editable({validate:function(e){return""===a.trim(e)?"This field is required":void 0}}),a("#sex").editable({prepend:"not selected",source:[{value:1,text:"Male"},{value:2,text:"Female"}],display:function(e,i){var n={"":"gray",1:"green",2:"blue"},t=a.grep(i,function(a){return a.value===e});t.length?a(this).text(t[0].text).css("color",n[e]):a(this).empty()}}),a("#status").editable(),a("#group").editable({showbuttons:!1}),a("#vacation").editable({datepicker:{todayBtn:"linked"}}),a("#dob").editable(),a("#event").editable({placement:"right",combodate:{firstItem:"name"}}),a("#meeting_start").editable({format:"yyyy-mm-dd hh:ii",viewformat:"dd/mm/yyyy hh:ii",validate:function(a){return a&&10===a.getDate()?"Day cant be 10!":void 0},datetimepicker:{todayBtn:"linked",weekStart:1}}),a("#comments").editable({showbuttons:"bottom"}),a("#note").editable(),a("#pencil").click(function(e){e.stopPropagation(),e.preventDefault(),a("#note").editable("toggle")}),a("#state").editable({source:["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Dakota","North Carolina","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]}),a("#state2").editable({value:"California",typeahead:{name:"state",local:["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Dakota","North Carolina","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]}}),a("#fruits").editable({pk:1,limit:3,source:[{value:1,text:"banana"},{value:2,text:"peach"},{value:3,text:"apple"},{value:4,text:"watermelon"},{value:5,text:"orange"}]}),a("#tags").editable({select2:{tags:["html","javascript","css","ajax"],tokenSeparators:[","," "]}}),a.each({BD:"Bangladesh",BE:"Belgium",BF:"Burkina Faso",BG:"Bulgaria",BA:"Bosnia and Herzegovina",BB:"Barbados",WF:"Wallis and Futuna",BL:"Saint Bartelemey",BM:"Bermuda",BN:"Brunei Darussalam",BO:"Bolivia",BH:"Bahrain",BI:"Burundi",BJ:"Benin",BT:"Bhutan",JM:"Jamaica",BV:"Bouvet Island",BW:"Botswana",WS:"Samoa",BR:"Brazil",BS:"Bahamas",JE:"Jersey",BY:"Belarus",O1:"Other Country",LV:"Latvia",RW:"Rwanda",RS:"Serbia",TL:"Timor-Leste",RE:"Reunion",LU:"Luxembourg",TJ:"Tajikistan",RO:"Romania",PG:"Papua New Guinea",GW:"Guinea-Bissau",GU:"Guam",GT:"Guatemala",GS:"South Georgia and the South Sandwich Islands",GR:"Greece",GQ:"Equatorial Guinea",GP:"Guadeloupe",JP:"Japan",GY:"Guyana",GG:"Guernsey",GF:"French Guiana",GE:"Georgia",GD:"Grenada",GB:"United Kingdom",GA:"Gabon",SV:"El Salvador",GN:"Guinea",GM:"Gambia",GL:"Greenland",GI:"Gibraltar",GH:"Ghana",OM:"Oman",TN:"Tunisia",JO:"Jordan",HR:"Croatia",HT:"Haiti",HU:"Hungary",HK:"Hong Kong",HN:"Honduras",HM:"Heard Island and McDonald Islands",VE:"Venezuela",PR:"Puerto Rico",PS:"Palestinian Territory",PW:"Palau",PT:"Portugal",SJ:"Svalbard and Jan Mayen",PY:"Paraguay",IQ:"Iraq",PA:"Panama",PF:"French Polynesia",BZ:"Belize",PE:"Peru",PK:"Pakistan",PH:"Philippines",PN:"Pitcairn",TM:"Turkmenistan",PL:"Poland",PM:"Saint Pierre and Miquelon",ZM:"Zambia",EH:"Western Sahara",RU:"Russian Federation",EE:"Estonia",EG:"Egypt",TK:"Tokelau",ZA:"South Africa",EC:"Ecuador",IT:"Italy",VN:"Vietnam",SB:"Solomon Islands",EU:"Europe",ET:"Ethiopia",SO:"Somalia",ZW:"Zimbabwe",SA:"Saudi Arabia",ES:"Spain",ER:"Eritrea",ME:"Montenegro",MD:"Moldova, Republic of",MG:"Madagascar",MF:"Saint Martin",MA:"Morocco",MC:"Monaco",UZ:"Uzbekistan",MM:"Myanmar",ML:"Mali",MO:"Macao",MN:"Mongolia",MH:"Marshall Islands",MK:"Macedonia",MU:"Mauritius",MT:"Malta",MW:"Malawi",MV:"Maldives",MQ:"Martinique",MP:"Northern Mariana Islands",MS:"Montserrat",MR:"Mauritania",IM:"Isle of Man",UG:"Uganda",TZ:"Tanzania, United Republic of",MY:"Malaysia",MX:"Mexico",IL:"Israel",FR:"France",IO:"British Indian Ocean Territory",FX:"France, Metropolitan",SH:"Saint Helena",FI:"Finland",FJ:"Fiji",FK:"Falkland Islands (Malvinas)",FM:"Micronesia, Federated States of",FO:"Faroe Islands",NI:"Nicaragua",NL:"Netherlands",NO:"Norway",NA:"Namibia",VU:"Vanuatu",NC:"New Caledonia",NE:"Niger",NF:"Norfolk Island",NG:"Nigeria",NZ:"New Zealand",NP:"Nepal",NR:"Nauru",NU:"Niue",CK:"Cook Islands",CI:"Cote d'Ivoire",CH:"Switzerland",CO:"Colombia",CN:"China",CM:"Cameroon",CL:"Chile",CC:"Cocos (Keeling) Islands",CA:"Canada",CG:"Congo",CF:"Central African Republic",CD:"Congo, The Democratic Republic of the",CZ:"Czech Republic",CY:"Cyprus",CX:"Christmas Island",CR:"Costa Rica",CV:"Cape Verde",CU:"Cuba",SZ:"Swaziland",SY:"Syrian Arab Republic",KG:"Kyrgyzstan",KE:"Kenya",SR:"Suriname",KI:"Kiribati",KH:"Cambodia",KN:"Saint Kitts and Nevis",KM:"Comoros",ST:"Sao Tome and Principe",SK:"Slovakia",KR:"Korea, Republic of",SI:"Slovenia",KP:"Korea, Democratic People's Republic of",KW:"Kuwait",SN:"Senegal",SM:"San Marino",SL:"Sierra Leone",SC:"Seychelles",KZ:"Kazakhstan",KY:"Cayman Islands",SG:"Singapore",SE:"Sweden",SD:"Sudan",DO:"Dominican Republic",DM:"Dominica",DJ:"Djibouti",DK:"Denmark",VG:"Virgin Islands, British",DE:"Germany",YE:"Yemen",DZ:"Algeria",US:"United States",UY:"Uruguay",YT:"Mayotte",UM:"United States Minor Outlying Islands",LB:"Lebanon",LC:"Saint Lucia",LA:"Lao People's Democratic Republic",TV:"Tuvalu",TW:"Taiwan",TT:"Trinidad and Tobago",TR:"Turkey",LK:"Sri Lanka",LI:"Liechtenstein",A1:"Anonymous Proxy",TO:"Tonga",LT:"Lithuania",A2:"Satellite Provider",LR:"Liberia",LS:"Lesotho",TH:"Thailand",TF:"French Southern Territories",TG:"Togo",TD:"Chad",TC:"Turks and Caicos Islands",LY:"Libyan Arab Jamahiriya",VA:"Holy See (Vatican City State)",VC:"Saint Vincent and the Grenadines",AE:"United Arab Emirates",AD:"Andorra",AG:"Antigua and Barbuda",AF:"Afghanistan",AI:"Anguilla",VI:"Virgin Islands, U.S.",IS:"Iceland",IR:"Iran, Islamic Republic of",AM:"Armenia",AL:"Albania",AO:"Angola",AN:"Netherlands Antilles",AQ:"Antarctica",AP:"Asia/Pacific Region",AS:"American Samoa",AR:"Argentina",AU:"Australia",AT:"Austria",AW:"Aruba",IN:"India",AX:"Aland Islands",AZ:"Azerbaijan",IE:"Ireland",ID:"Indonesia",UA:"Ukraine",QA:"Qatar",MZ:"Mozambique"},function(a,i){e.push({id:a,text:i})}),a("#country").editable({source:e,select2:{width:200,placeholder:"Select country",allowClear:!0}}),a("#address").editable({url:"/post",value:{city:"Moscow",street:"Lenina",building:"12"},validate:function(a){return""===a.city?"city is required!":void 0},display:function(e){if(!e)return void a(this).empty();var i="<b>"+a("<div>").text(e.city).html()+"</b>, "+a("<div>").text(e.street).html()+" st., bld. "+a("<div>").text(e.building).html();a(this).html(i)}}),a("#user .editable").on("hidden",function(e,i){if("save"===i||"nochange"===i){var n=a(this).closest("tr").next().find(".editable");a("#autoopen").is(":checked")?setTimeout(function(){n.editable("show")},300):n.focus()}})}(jQuery);