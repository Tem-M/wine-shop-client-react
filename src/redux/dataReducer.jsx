import produce from "immer";

export const InitialState = {
    products: [
        {
            barcode: 1,
            name: "רזרב GOLD רוזה, בציר 2022",
            description: "יין העשוי מענבים שנבצרו בבשלות מדויקת במרומי הגליל העליון בכרם עלמה. הכרם נבחר על ידי הייננים בזכות אקלים ייחודי ואופי פרי יוצא דופן. ",
            pic: "https://blend.co.il/on/demandware.static/-/Sites-blend-master-catalog/default/dw1f37cec8/Wine/Rose%20wine/7008669.jpg",
            details:
                <ul>
                    <li><strong>יקב: </strong>ברקן</li>
                    <li><strong>זן: </strong>רוזה</li>
                    <li><strong>נפח הבקבוק: </strong>750 מ"ל</li>
                    <li><strong>איזור גידול: </strong>גליל עליון, כרם עלמה</li>
                    <li><strong>סגנון: </strong>פירותי וקליל</li>
                    <li><strong>כשרות: </strong>מועצה מקומית גזר, חתם סופר</li>
                </ul>
            ,
            price: 46
        },

        {
            barcode: 3,
            name: "THE GOLD EDITION גוורצטרמינר",
            description: "גוורצטרמינר, יין לבן מסדרת רזרב GOLD EDITION של יקבי ברקן. היין עשוי מענבי גוורצטרמינר הגדלים במרום הגליל בכרם עלמה. הכרם מניב כמות נמוכה של פרי איכותי המוביל ליין ארומתי ופירותי, בעל מתיקות מעודנת.",
            pic: "https://blend.co.il/on/demandware.static/-/Sites-blend-master-catalog/default/dwd16cb454/Wine/White%20wine/7009311%20GOLD.jpg",
            details:
                <ul>
                    <li><strong>יקב: </strong>ברקן</li>
                    <li><strong>זן: </strong>גוורצטרמינר</li>
                    <li><strong>נפח הבקבוק: </strong>750 מ"ל</li>
                    <li><strong>סגנון: </strong>ארומתי ופירותי</li>
                    <li><strong>כשרות: </strong>;מועצה מקומית גזר, חתם סופר</li>
                </ul>
            ,
            price: 46
        },

        {
            barcode: 4,
            name: "ספיישל רזרב שרדונה",
            description: "מקור ענבי שרדונה Special Reserve הוא בכרמי היקב בהרי ירושלים ואיזור ריחניה שבגליל המאופיינים בקרקע נזירה וטמפרטורות יחסית נמוכות. יין מובחר זה, שהתיישן בחביות אלון במשך 6 חודשים, עשיר ואלגנטי המשלב היטב בין טעמי הפרי וארומות עץ האלון.",
            pic: "https://blend.co.il/on/demandware.static/-/Sites-blend-master-catalog/default/dw406d3820/Wine/White%20wine/7002901.jpg",
            details:
                <ul>
                    <li><strong>יקב:</strong> ברקן</li>
                    <li><strong>נפח הבקבוק:</strong> 750 מ"ל</li>
                    <li><strong>אזור גידול:</strong> הרי ירושלים ואיזור ריחניה שבגליל</li>
                    <li><strong>כשרות:</strong> מועצה מקומית גזר, חתם סופר</li>
                </ul>
            ,
            price: 65
        },

        {
            barcode: 5,
            name: "קאווה איבריקה לבן יבש",
            description: "קאווה איבריקה יין לבן מבעבע יבש ספרדי, המיוצר בעיקר באזור קטלוניה. יין פירותי, אלגנטי, מעודן וארומתי, בעל טעם מתקתק ורך.",
            pic: "https://blend.co.il/on/demandware.static/-/Sites-blend-master-catalog/default/dw51bd9e26/Wine/White%20wine/7002911.jpg",
            details:
                <ul>
                    <li><strong>נפח הבקבוק:</strong> 750 מ"ל</li>
                    <li><strong>כשרות: </strong>הרבנות הראשית לישראל, חתם סופר</li>
                </ul>
            ,
            price: 39
        },

        {
            barcode: 6,
            name: "BETA גרי",
            description: "רוזה קלאסי שמתאים לימי האביב והקיץ החמים. הארומות פרחוניות והתחושה מרעננת וקלילה. זהו יין המשתלב נפלא עם מאכלים קלים.",
            pic: "https://blend.co.il/on/demandware.static/-/Sites-blend-master-catalog/default/dw8cb3e5a5/Wine/Rose%20wine/7009612.jpg",
            details:
                <ul>
                    <li><strong>יקב:&nbsp;</strong>ברקן</li>
                    <li><strong>נפח הבקבוק: </strong>750 מ"ל</li>
                    <li><strong>איזור גידול: </strong>הרי יהודה. טרסות קטנות ומשופעות בבית נקופה</li>
                    <li><strong>סגנון: </strong>פירותי וקליל</li>
                    <li><strong>כשרות: </strong>מועצה מקומית גזר, בד"צ בית יוסף, חתם סופר</li>
                </ul>,
            price: 95
        },

        {
            barcode: 7,
            name: "פלדשטיין דבוקי",
            description: "דבוקי זן ישראלי מובהק וקדום, אשר המחקר העדכני מייחס אותו כבר לתקופת התנ\"ך. גדל בעבר בכל רחבי הארץ וכיום בעיקר בגאיות הכרמל ובהרי יהודה. היין מגיע מעמק אלונה, שבמורדות הכרמל המזרחיים, מכרם בן 60 שנה, ונבצר על הצד הבשל, הזהוב, שבדבוקי מגיע בבריקס נמוך. תסס במיכל נירוסטה, יושן ממושכות על משקעיו הנבחשים תכופות, להענקת גוף ודגש של אופיו המלוני. תובל בנגיעת סוביניון ירקרקה",
            pic: "https://blend.co.il/on/demandware.static/-/Sites-blend-master-catalog/default/dw96aa6d3e/Wine/White%20wine/7010476.jpg",
            details:
                <ul>
                    <li><strong>יקב:</strong> ברקן</li>
                    <li><strong>נפח בקבוק:</strong> 750 מ"ל</li>
                    <li><strong>זן:</strong> קברנה סוביניון</li>
                    <li><strong>כשרות</strong>: מועצה מקומית גזר, בד"צ בית יוסף, חתם סופר, כשר לפסח</li>
                </ul>
            ,
            price: 115
        },

        {
            barcode: 8,
            name: "האלון הבודד שרדונה, גוש עציון",
            description: "סדרת היינות האלון הבודד מורכבת מיינות העשויים מענבים שנבצרו מכרם בודד, היוצרים יחדיו יינות לבנים ואדומים, עוצמתיים בטעמים ובניחוחות. הענבים ביין השרדונה מסדרת האלון הבודד, נבצרו בבציר ידני והיין הוא תוצר של הנוזל הראשון שנסחט מתוך הענבים. ענבי השרדונה, עוברים תהליך תסיסה הדרגתי ומבוקר במשך שלושה שבועות בתוך מיכלי נירוסטה ועל מנת לשמור את טעמו הפרותי והרענן, חלק קטן ממנו יושן בחבית עץ אלון צרפתי בנפח 400 ליטרים.",
            pic: "https://blend.co.il/on/demandware.static/-/Sites-blend-master-catalog/default/dw738dabe9/Wine/White%20wine/7011463.jpg",
            details:
                <ul>
                    <li><strong>נפח הבקבוק:</strong> 750 מ"ל.</li>
                    <li><strong>אחוז אלכוהול:</strong> 14%.</li>
                    <li><strong>כשרות: </strong>בד"צ בית יוסף.</li>
                </ul>
            ,
            price: 90
        },

        {
            barcode: 9,
            name: "מארה וויט",
            description: "בכרם בקעת הנדיב למרגלות זיכרון יעקב מטופחים בקפדנות זני ענבים בהנאה ועשייה ללא פשרות. יין ה - מארה וויט, יין המכיל בתוכו שילוב ייחודי בין ענבי מרסאן לענבי פרנץ קולומבארד המעניקים לו את האופי הים תיכוני המובהק. תהליך הייצור של המארה מתחיל בבציר בשעות הבוקר המוקדמות, ממשיך אל מיון ידני וקפדני ומשם אל תהליך תסיסה ייחודי בו חלק מהענבים אינם נסחטים ומשולבים בתסיסה כשהם באשכולות שלמים. שלב ייחודי זה בתהליך הייצור מקנה ליין ביטוי עוצמתי של רעננות. כל אחד מהזנים ביין מותסס בנפרד בתנאים האופטימליים עבורו, בטמפרטורה מבוקרת במשך שלושה שבועות.",
            pic: "https://blend.co.il/on/demandware.static/-/Sites-blend-master-catalog/default/dw8f2a586a/Wine/White%20wine/7011487.jpg",
            details:
                <ul>
                    <li><strong>יקב: </strong>מאיה</li>
                    <li><strong>נפח הבקבוק:</strong> 750 מ"ל.</li>
                    <li><strong>אחוז אלכוהול:</strong> 11.5%.</li>
                    <li><strong>כשרות:</strong> K ובד"צ בית יוסף.</li>
                </ul>
            ,
            price: 90
        },

        {
            barcode: 10,
            name: "וויט פרנק",
            description: "יקב טוליפ, מייצרים משנת 2003 יינות יחודיים ופורצי דרך בטעמיהם ובתהליכי הייצור שלהם, ממש כמו הווייט פרנק. ווייט פרנק הוא בלנד ייחודי של קברנה פרנק וסוביניון בלאן. הענבים מהם מיוצר הווייט פרנק, נבצרו בבציר ידני, נבחרו בקפידה טרם כניסתם ליקב ונסחטו במגע עדין וקצר על הקליפות, דבר המשמר את צבעו העדין ואת הטעם האופייני לו. שני זני הענבים הותססו בנפרד בתהליך התתססה לבנה קלאסית בטמפרטורה של 13-14 מעלות, כאשר תהליך התסיסה של הפרנק נעצר באופן יזום על מנת לשמר מתיקות עדינה ביין. הווייט פרנק מאופיין בארומה של מי ורדים, פריחת הדר ותות שדה. טעמיו הייחודיים של פירות יער טריים, פטל ודומדמניות מקנים לו סיומת עשבונית ומרעננת.",
            pic: "https://blend.co.il/on/demandware.static/-/Sites-blend-master-catalog/default/dw3c855512/Wine/White%20wine/7011384.jpg",
            details:
                <ul>
                    <li><strong>יקב: </strong>טוליפ</li>
                    <li><strong>נפח הבקבוק: </strong>750 מ"ל.</li>
                    <li><strong>אחוז אלכוהול:</strong> 12.5%.</li>
                    <li><strong>כשרות:</strong> K ובד"צ בית יוסף.</li>
                </ul>
            ,
            price: 90
        },

        {
            barcode: 11,
            name: "BETA כתום 2021",
            description: "בלנד של רוסאן, מראווי וג'נדאלי, אשר תססו על קליפותיהן בנפרד, התיישנו בחביות, ועורבבו יחדיו ליין מרתק ומלא סטייל. בעל מבנה טאנינים ייחודי וארומה אשר משתנה מרגע לרגע בכוס. להרפתקנים שבינכם",
            pic: "https://blend.co.il/on/demandware.static/-/Sites-blend-master-catalog/default/dw456de41d/Wine/White%20wine/7009950.jpg",
            details:
                <ul>
                    <li>איזור גידול: גליל עליון והרי יהודה</li>
                    <li>סגנון: עשיר וקרמי</li>
                    <li>יקב: ברקן</li>
                    <li>כשרות: מועצה מקומית גזר, בד"צ בית יוסף, חתם סופר</li>
                </ul>
            ,
            price: 95
        },

    ],
    users: [
        {
            userName: "me",
            password: "1234",
        },
        {
            userName: " ",
            password: " "
        }
    ],
    curUser: {
        userName: ""
    },
    admin: {
        userName: "admin",
        password: "abcdefg"
    },
    cart: [

    ]
}

export const datareducer = produce((state, action) => {
    //const navigate = useNavigate();
    switch (action.type) {
        case "ADD_TO_CART":
            if (state.cart.findIndex(p => p.barcode === action.payload.barcode) === -1) {
                state.cart.push(action.payload)
            }
            else {
                state.cart = state.cart.map((p) => p.barcode === action.payload.barcode ? { ...p, count: p.count + 1 } : p)
            }
            break

        case "DEC_COUNT":
            state.cart = state.cart.map((p) => p.barcode === action.payload.barcode ? { ...p, count: p.count - 1 } : p)
            state.cart = state.cart.filter((p) => p.count > 0)
            break

        case "INC_COUNT":
            state.cart = state.cart.map((p) => p.barcode === action.payload.barcode ? { ...p, count: p.count + 1 } : p)
            break

        case "LOG_IN":
            state.curUser = { ...state.curUser, userName: action.payload.userName }
            break

        case "ADD_PRODUCT":
            if (state.curUser.userName === state.admin.userName
                && state.products.findIndex(p => p.barcode === action.payload.barcode) === -1
                && action.payload.price > 0) {
                state.products.push(
                    {
                        ...action.payload,
                        barcode: parseInt(action.payload.barcode),
                        price: parseInt(action.payload.price)
                    })
            }
            else
                alert("Add Product failed")
            break

        case "REMOVE_FROM_CART":
            debugger
            state.cart = state.cart.filter((p) => p.barcode !== action.payload.barcode)
            break

        case "SIGN_IN":
            state.users.push(action.payload);
            state.curUser = { ...state.curUser, userName: action.payload.userName }
            break

        case "REMOVE":
            state.products = state.products.filter(p => p.barcode !== action.payload.barcode)
            break

        default:
            break


    }
}, InitialState)