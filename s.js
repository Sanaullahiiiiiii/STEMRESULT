const studentMarks = {  
    "308": { science: 36, math: 32, english: 39, name: "Maira javed", school: "Javed Khursheed", coach: "St.Paul", category: "A" },
    "105": { science: 38, math: 30, english: 36, name: "Azlan Buriro", school: "Ahsan Ali", coach: "Momentus", category: "A" },
    "337": { science: 36, math: 31, english: 36, name: "Pehlaj Kumar", school: "Mithoo-mal", coach: "GBHS N0#2", category: "A" },
    "303": { science: 35, math: 32, english: 34, name: "Maryam Deedar", school: "Deedar Hussain", coach: "St.Paul", category: "A" },
    "196": { science: 34, math: 32, english: 34, name: "Farooque Ahmed", school: "Javed Ahmed", coach: "St.Paul", category: "A" },
    "102": { science: 37, math: 23, english: 36, name: "Muskan Shaikh", school: "Aftab Ahmed Shaikh", coach: "Bukhari Model High School SAU", category: "A" },
    "301": { science: 33, math: 24, english: 37, name: "Zainab Fatima", school: "Taj Muhammad Talpur", coach: "St.Paul", category: "A" },
    "118": { science: 33, math: 24, english: 36, name: "Bezaleel", school: "Maqsood Bhatti", coach: "St.Paul" },
    "162": { science: 34, math: 28, english: 30, name: "Bilawal Malha", school: ".......", coach: "Momentous", category: "A" },
    "126": { science: 27, math: 31, english: 33, name: "Muhammad Siraj", school: "Riaz Ahmed Talpur", coach: "CBHS", category: "A" },
    "145": { science: 33, math: 21, english: 37, name: "Ibadat Jamali", school: "Javed Jamali", coach: "CBHS", category: "A" },
    "150": { science: 28, math: 24, english: 39, name: "Zainab Wahid", school: "Abdul Wahid", coach: "CBHS", category: "A" },
    "194": { science: 33, math: 25, english: 31, name: "Khan Muhammad", school: "Attaullah", coach: "St.Paul", category: "A" },
    "146": { science: 25, math: 29, english: 34, name: "G.Sidra Rattar", school: "Shah Muhammad", coach: "CBHS", category: "A" },
    "306": { science: 29, math: 22, english: 36, name: "Fatima", school: "Riyasat Ali", coach: "St.Paul", category: "A"  },
    "149": { science: 29, math: 23, english: 34, name: "Falak Noor", school: "Asmatullah", coach: "CBHS", category: "A" },
    "197": { science: 32, math: 18, english: 35, name: "Sambhara", school: "Abdul Qayoom", coach: "Allied School Mir colony", category: "A"  },
    "307": { science: 30, math: 21, english: 34, name: "Sobia Javed", school: "Javed Khursheed", coach: "St.Paul", category: "A"  },
    "319": { science: 29, math: 23, english: 33, name: "Alisha Noor", school: "Noor Ahmed Rattar", coach: "GGHS N0#1 SAU", category: "A"  },
    "130": { science: 30, math: 19, english: 34, name: "Mansoor Ali ", school: "Talib Hussain", coach: "CBHS", category: "A" },
    "195": { science: 27, math: 26, english: 30, name: "Maryam", school: "Attaullah", coach: "St.Paul", category: "A" },
    "302": { science: 34, math: 18, english: 31, name: "Noor Sindhu", school: "Abdul Sami", coach: "St.Paul", category: "A"  },
    "185": { science: 29, math: 19, english: 33, name: "Sania", school: "Muhammad Saleem", coach: "Bukhari Model High School SAU", category: "A" },
    "120": { science: 31, math: 18, english: 39, name: "Ibaad Hassan", school: "Faheem Hassan", coach: "Allied School", category: "A"  },
    "153": { science: 28, math: 16, english: 35, name: "Tadabbur jahan", school: "Mansoor Ahmed", coach: "CBHS", category: "A"  },
    "156": { science: 23, math: 23, english: 32, name: "Hijab e Fatima", school: "Abdul Waheed", coach: "CBHS", category: "A"  },
    "107": { science: 22, math: 24, english: 29, name: "Mutahira Memon", school: "Habib ur Rehman", coach: "Momentous", category: "A"  },
    "132": { science: 20, math: 26, english: 29, name: "Abdul Rehman Bhatti", school: "Shahnawaz Bhatti", coach: "CBHS", category: "A" },
    "167": { science: 18, math: 23, english: 33, name: "Abdul Ahad Solangi", school: "Qurban Ali ", coach: "CBHS", category: "A"  },
    "160": { science: 23, math: 21, english: 29, name: "Zuriel SM Ghauri", school: "Mr Shakeel", coach: "The Educators", category: "A"  },
    "164": { science: 24, math: 17, english: 31, name: "Nirmal Laghari", school: "khudadad Laghari", coach: "CBHS", category: "A"  },
    "198": { science: 5, math: 36, english: 30, name: "Sidra Khokhar", school: "Bashir Ahmed", coach: "Bukhari Model High School SAU", category: "A"  },
    "123": { science: 28, math: 17, english: 25, name: "Shiksha Oad", school: "Suneel Kumar", coach: "CBHS", category: "A", category: "A"  },
    "138": { science: 24, math: 15, english: 31, name: "Suraksha Oad", school: "Susheel Kumar", coach: "CBHS", category: "A", category: "A" },
    "152": { science: 29, math: 11, english: 30, name: "Kaneez Fatima", school: "Sher Muhammad", coach: "CBHS", category: "A" },
    "155": { science: 21, math: 17, english: 32, name: "Muhammad Ayan Rattar", school: "Abdul Jabbar Rattar", coach: "CBHS", category: "A"  },
    "176": { science: 24, math: 18, english: 28, name: "Susheel kumar", school: "Mahesh Kumar", coach: "CBHS", category: "A"  },
    "113": { science: 16, math: 20, english: 33, name: "Uzma umrani", school: "Daim Umrani", coach: "CBHS", category: "A"  },
    "136": { science: 27, math: 18, english: 24, name: "Sadia ", school: "Rana Gulsher", coach: "CBHS", category: "A" },
    "186": { science: 28, math: 13, english: 28, name: "Alina Chandio", school: "M.saleem", coach: "Bukhari Model high school", category: "A"  },
    "305": { science: 19, math: 24, english: 26, name: "zoya Gohar", school: "Hamid Gohar", coach: "St.Paul", category: "A"  },
    "133": { science: 25, math: 19, english: 24, name: "Ali waris Memon", school: "Bashir Ahmed", coach: "CBHS", category: "A" },
    "174": { science: 17, math: 25, english: 26, name: "Anush Veer", school: "Bhamar lal", coach: "CBHS", category: "A"  },
    "179": { science: 29, math: 14, english: 25, name: "Saif Ali", school: "Mujeeb Ur Rehman", coach: "Progressive High School", category: "A" },
    "117": { science: 24, math: 14, english: 29, name: "Rimsha", school: "Mir Majid", coach: "CBHS", category: "A" },
    
   
     
    "187": { science: 24, math: 14, english: 29, name: "BENAZIR", school: "IMAM DIN BHATTI", coach: "BUKHARI MODEL HIGH SCHOOL SAU", category: "B" },

   
    "201": { science: 29, math: 23, english: 25, name: "CHANDER SHAKHER", school: "BHEEMO MAL", coach: "CBHS", category: "B" },
    "202": { science: 19, math: 15, english: 11, name: "SHAM DAS", school: "DILEEP KUMAR", coach: "NSBC", category: "B" },
    "203": { science: 21, math: 33, english: 29, name: "NAJAF ALI", school: "FAQEER MUHAMMAD", coach: "NSBC", category: "B" },

   
    "204": { science: 28, math: 13, english: 14, name: "JAWAD AHMED VEESAR", school: "ABDUL MAJID VESAR", coach: "GBHS NO#2", category: "B" },
    "205": { science: 16, math: 16, english: 19, name: "SHAHYAR KHAN", school: "SHAHBUDDIN MENGAL", coach: "AL MEHMOOD SCHOOL", category: "B" },
    "206": { science: 26, math: 22, english: 24, name: "SANIA NAREJO", school: "SAFDAR ALI", coach: "BUKHARI MODEL HIGH SCHOOL", category: "B" },


    "207": { science: 28, math: 26, english: 27, name: "ALIZA TABASUM", school: "ABDUL RASHEED", coach: "BUKHARI MODEL HIGH SCHOOL", category: "B" },
    "208": { science: 31, math: 23, english: 23, name: "MARJAN", school: "AURANZEB", coach: "BUKHARI MODEL HIGH SCHOOL", category: "B" },
    "209": { science: 39, math: 21, english: 30, name: "DUAA JAVED", school: "JAVED ALI", coach: "BUKHARI MODEL HIGH SCHOOL", category: "B" },
    "210": { science: 18, math: 16, english: 12, name: "ASIM ABBASI", school: "IRSHAD ALI", coach: "GBHS NO# 1", category: "B" },
    "211": { science: 18, math: 15, english: 20, name: "ALI RAZA ", school: "MUHAMMAD RAMZAN", coach: "GBHS NO# 1", category: "B" },
    "212": { science: 0, math: 0, english: 0, name: "ASHIQUE", school: "JAVED AHMED", coach: "GBHS NO# 1", category: "B" },
    "213": { science: 14, math: 8, english: 9, name: "BILAWAL", school: "FIDA HUSSAIN", coach: "GBHS NO# 1", category: "B" },
  



    "214": { science: 19, math: 16, english: 19, name: "PERWAIZ ALI", school: "MIR HASSAN", coach: "GBHS NO# 1", category: "B" },
"215": { science: 16, math: 14, english: 16, name: "G.MUSTAFA", school: "ABDUL RAHEEM SOOMRO", coach: "GBHS NO# 1", category: "B" },
"216": { science: 19, math: 17, english: 15, name: "MOAZAM ALI", school: "RIAZ AHMED", coach: "GBHS NO# 1", category: "B" },
"217": { science: 12, math: 16, english: 18, name: "SHAHRUKH KHAN", school: "IMTIAZ AHMED", coach: "......", category: "B" },
"218": { science: 22, math: 24, english: 28, name: "NAYAB NOOR RAHOOR", school: "NOOR AHMED", coach: "CBHS", category: "B" },
"219": { science: 35, math: 27, english: 27, name: "HAFSA", school: "MUHAMMAD TUFAIL", coach: "CBHS", category: "B" },
"220": { science: 31, math: 26, english: 19, name: "SUHNI", school: "ABDUL GHAFAR", coach: "CBHS", category: "B" },











"221": { science: 15, math: 24, english: 23, name: "AMNA TALPUR", school: "MIR ZUBAIR TALPUR", coach: "CBHS", category: "B" },
"222": { science: 19, math: 22, english: 25, name: "HIBA BURIRO", school: "GHULAM NABI BURIRO", coach: "CBHS", category: "B" },
"223": { science: 16, math: 12, english: 17, name: "ZOYA HABIB", school: "HABIBULLAH", coach: "CBHS", category: "B" },
"224": { science: 26, math: 29, english: 23, name: "HASNAIN ALI VEESAR", school: "MUHAMMAD SULEMAN", coach: "CBHS", category: "B" },

  

"225": { science: 5, math: 21, english: 21, name: "FAIZAN AHMED", school: "FAZUL AHMED", coach: "CBHS", category: "B" },
"226": { science: 17, math: 24, english: 32, name: "ALISHBA RATTAR", school: "ASHFAQUE ALI RATTAR", coach: "CBHS", category: "B" },
"227": { science: 35, math: 23, english: 32, name: "BENAZIR RIAZ", school: "RIAZ AHMED", coach: "GGHS NO# 2", category: "B" },
"228": { science: 16, math: 11, english: 14, name: "M.AFZAL", school: "MUHAMMAD ASLAM", coach: "RAJPUT SCHOOL", category: "B" },
"229": { science: 30, math: 17, english: 20, name: "RABIA", school: "MASHOOQUE ALI", coach: "RAJPUT SCHOOL", category: "B" },




"230": { science: 10, math: 10, english: 8, name: "SHARAFAT ALI", school: "ILLAHI BUX", coach: "RAJPUT SCHOOL", category: "B" },
"231": { science: 12, math: 19, english: 20, name: "MUZAMIL", school: "ABDUL NAEEM", coach: "RAJPUT SCHOOL", category: "B" },
"232": { science: 12, math: 3, english: 23, name: "KIRAN", school: "KHAN MUHAMMAD", coach: "RAJPUT SCHOOL", category: "B" },
"233": { science: 32, math: 25, english: 23, name: "FARYAL", school: "SHER ALI", coach: "RAJPUT SCHOOL", category: "B" },
"234": { science: 14, math: 15, english: 19, name: "SOBIA", school: "GHULAM SARWAR", coach: "RAJPUT SCHOOL", category: "B" },
"235": { science: 20, math: 17, english: 18, name: "MUSKAN", school: "ABDUL AZIZ", coach: "RAJPUT SCHOOL", category: "B" },
"236": { science: 17, math: 21, english: 30, name: "UMAIMA", school: "HAMMADULLAH", coach: "RAJPUT SCHOOL", category: "B" },
"237": { science: 20, math: 16, english: 19, name: "BISMA", school: "MANZOOR AHMED", coach: "RAJPUT SCHOOL" , category: "B" },
"238": { science: 18, math: 16, english: 18, name: "MISBAH", school: "TASLEEM AKHTAR", coach: "RAJPUT SCHOOL", category: "B" },




  

"239": { science: 27, math: 24, english: 29, name: "MAHA SHEIKH", school: "WASIULLAH SHAIKH", coach: "CBHS", category: "B" },
"240": { science: 20, math: 23, english: 27, name: "DUAA", school: "MUHAMMAD NAEEM", coach: "CBHS", category: "B" },
"241": { science: 8, math: 16, english: 24, name: "SYEDA AISHA NOOR", school: "ISHTIAQUE", coach: "CBHS", category: "B" },
"242": { science: 16, math: 22, english: 21, name: "SYEDA MEHREEN", school: "SYED ASHRAF", coach: "CBHS", category: "B" },
"243": { science: 19, math: 24, english: 18, name: "JANAK SOOFI", school: "BHAGWANDAS", coach: "GBHS NO#2", category: "B" },
"244": { science: 20, math: 23, english: 22, name: "SONAL QAZBANO", school: "KHUDADAD KHAN", coach: "CBHS", category: "B" },
"245": { science: 24, math: 15, english: 22, name: "NISHA", school: "MUHAMMAD AKBAR", coach: "CBHS", category: "B" },
"246": { science: 19, math: 11, english: 21, name: "MURK", school: "INAYAT HUSSAIN", coach: "CBHS", category: "B" },
"247": { science: 27, math: 24, english: 30, name: "ZEESHAN RAZA", school: "KHADIM HUSSAIN", coach: "CBHS", category: "B" },




 




"248": { science: 20, math: 22, english: 26, name: "AREEBA SHAFIQUE", school: "SHAFIQUE AHMED", coach: "CBHS", category: "B" },
"249": { science: 28, math: 33, english: 35, name: "NAJAD", school: "NOOR KHAN", coach: "CBHS", category: "B" },
"250": { science: 0, math: 0, english: 0, name: " SHAHRIYAR HASSAN", school: "ALI HASSAN", coach: "GBHS NO#2", category: "BB" },
"251": { science: 0, math: 0, english: 0, name: "KINZA YOUSAFZAI", school: "WAJID ALI", coach: "CBHS", category: "B" },
"252": { science: 7, math: 15, english: 14, name: "AMNA", school: "FAREED AHMED", coach: "GGHS TQ", category: "B" },
"253": { science: 12, math: 18, english: 21, name: "HINA FATIMA", school: "GHULAM MUSTAFA", coach: "GGHS TQ", category: "B" },
"254": { science: 21, math: 24, english: 25, name: "UM E EMAN", school: "KHALIL AHMED", coach: "GGHS TQ", category: "B" },
"255": { science: 22, math: 22, english: 22, name: "AYESHA", school: "INAYATULLAH", coach: "GGHS TQ", category: "B" },
"256": { science: 9, math: 26, english: 20, name: "ERUM BHAND", school: "AMEER ALI", coach: "CBHS", category: "B" },
"257": { science: 0, math: 0, english: 0, name: "UZAIR HASSAN", school: "ABDUL GHAFAR", coach: "CBHS", category: "B" },
"258": { science: 30, math: 27, english: 25, name: "UM E MARYAM", school: "AZAM ALI", coach: "CBHS", category: "B" },
"259": { science: 0, math: 0, english: 0, name: "AATIQUA FATIMA", school: "NADEEM-UD-DIN", coach: "CBHS", category: "B" },
"260": { science: 10, math: 16, english: 25, name: "KHUSHBOO", school: "GHULAM NABI", coach: "CBHS", category: "B" },
"261": { science: 26, math: 17, english: 26, name: "KANWAL", school: "ILLAHI BUX UMRANI", coach: "CBHS", category: "B" },
"262": { science: 29, math: 24, english: 26, name: "KHADIJA ", school: "JAVED ALI", coach: "CBHS", category: "B" },
"263": { science: 18, math: 10, english: 21, name: "IQRA CHANDIO", school: "SHAHID ALI", coach: "CBHS", category: "B" },
"264": { science: 22, math: 13, english: 23, name: "MARYAM", school: "SHAHID ALI", coach: "CBHS", category: "B" },
"265": { science: 17, math: 27, english: 27, name: "FATIMA", school: "ASHFAQUE ALI", coach: "GGHS TQ", category: "B" },
"266": { science: 18, math: 18, english: 24, name: "KASHAF RATTAR", school: "ASHFAQUE ALI", coach: "GGHS NO#1", category: "B" },
"267": { science: 10, math: 9, english: 17, name: "CHANDNI", school: "BHAGWANDAS", coach: "GGHS NO#1", category: "B" },
"268": { science: 9, math: 15, english: 15, name: "FIZA MAGSI", school: "MUHAMMAD JAMAL", coach: "GGHS NO#1", category: "B" },
"269": { science: 0, math: 0, english: 0, name: "FIZA", school: "HAZAR ALI", coach: "GGHS NO#1", category: "B" },
"270": { science: 23, math: 23, english: 27, name: "BENAZIR", school: "SAJAD ALI", coach: "GGHS NO#1", category: "B" },
"271": { science: 11, math: 13, english: 16, name: "SEERAT FATIMA", school: "ASADULLAH NIZAMANI", coach: "GGHS TQ", category: "B" },
"272": { science: 14, math: 8, english: 22, name: "ZAIN UL ABIDIN", school: "NIAZ AHMED RATTAR", coach: "CBHS", category: "B" },
"273": { science: 27, math: 23, english: 31, name: "ESHA OAD", school: "DR KALDEEP KUMAR", coach: "ALLIED SCHOOL", category: "B" },
"274": { science: 35, math: 32, english: 34, name: "TUSHANT NAIN DEVRAJANI", school: "OM PARKASH DEVRAJANI", coach: "ALLIED", category: "B" },
"275": { science: 28, math: 30, english: 25, name: "KARAN KUMAR", school: "MR PAPOO", coach: "CBHS", category: "B" },




















    "127": {
        science: 25,
        math: 19,
        english: 23,
        name: "MUZAMMIL",
        school: "M.SDDIQUE BHUTTO",
        coach: "CBHS Mir Colony",
        category: "A"
    },
    "154": {
        science: 16,
        math: 18,
        english: 31,
        name: "MADIHA GUL RATTAR",
        school: "MUHAMMAD NIAZ",
        coach: "CBHS Mir Colony",
        category: "A"
    },
    "158": {
        science: 22,
        math: 23,
        english: 20,
        name: "HASEEBULLAH JUMMU KHAN",
        school: "JUMMA KHAN",
        coach: "Bukhari Model High School",
        category: "A"
    },
    "161": {
        science: 16,
        math: 22,
        english: 27,
        name: "AWAIS MALLAH",
        school: "GHULAM HUSSAIN",
        coach: "Momentous School",
        category: "A"
    },
    "171": {
        science: 16,
        math: 24,
        english: 25,
        name: "S. M AYAAN",
        school: "SYED MUHAMMAD FARHAN",
        coach: "CBHS Mir Colony",
        category: "A"
    },
    "322": {
        science: 24,
        math: 14,
        english: 27,
        name: "DUA",
        school: "GHULAM HAIDER",
        coach: "Govt. Girls High School No. 1",
        category: "A"
    },
    "101": {
        science: 23,
        math: 16,
        english: 25,
        name: "TAHA LARIK",
        school: "KHALID LARIK",
        coach: "Momentous School",
        category: "A"
    },
    "170": {
        science: 18,
        math: 16,
        english: 30,
        name: "NAVERA BATOOL",
        school: "URS GHULAM",
        coach: "CBHS Mir Colony",
        category: "A"
    },
    "329": {
        science: 18,
        math: 18,
        english: 28,
        name: "YASHFEEN FATIMA",
        school: "ASADULLAH JAMALI",
        coach: "CBHS Mir Colony",
        category: "A"
    },
    "190": {
        science: 10,
        math: 20,
        english: 33,
        name: "MISBAH CHANDIO",
        school: "ZULFIQAR CHANDIO",
        coach: "CBHS Mir Colony",
        category: "A"
    },
    "333": {
        science: 17,
        math: 19,
        english: 27,
        name: "SHUA AL BANIN",
        school: "MANZOOR HUSSAIN",
        coach: "St. Paul",
        category: "A"
    },
    "144": {
        science: 19,
        math: 13,
        english: 29,
        name: "BAKHTAWAR",
        school: "RASOOL BUX",
        coach: "CBHS Mir Colony",
        category: "A"
    },
    "148": {
        science: 13,
        math: 22,
        english: 26,
        name: "NOOR NISA",
        school: "ABDUL REHMAN",
        coach: "CBHS Mir Colony",
        category: "A"
    },
    "165": {
        science: 19,
        math: 16,
        english: 26,
        name: "FATIMA ZEHRA",
        school: "SHEHBAZ ALI",
        coach: "CBHS Mir Colony",
        category: "A"
    },
    "199": {
        science: 19,
        math: 21,
        english: 21,
        name: "MUHAMMAD ARSALAN",
        school: "MUHAMMAD AKBAR",
        coach: "CBHS Mir Colony",
        category: "A"
    },
    "143": {
        science: 18,
        math: 14,
        english: 28,
        name: "TAYYABA",
        school: "FAIZ MUHAMMAD",
        coach: "CBHS Mir Colony",
        category: "A"
    },
    







    "169": {
        science: 16,
        math: 15,
        english: 29,
        name: "M. UMAR",
        school: "MUHAMMAD ASIF",
        coach: "CBHS Mir Colony",
        category: "A"
    },
    "323": {
        science: 14,
        math: 23,
        english: 23,
        name: "SUNAINA",
        school: "SANAULLAH",
        coach: "Govt. Girls High School No. 1",
        category: "A"
    },
    "137": {
        science: 17,
        math: 18,
        english: 24,
        name: "FARHANA",
        school: "AMEER ALI",
        coach: "CBHS Mir Colony",
        category: "A"
    },
    "140": {
        science: 18,
        math: 11,
        english: 30,
        name: "AREESHA",
        school: "MUSHTAQUE AHMED",
        coach: "CBHS Mir Colony",
        category: "A"
    },
    "316": {
        science: 19,
        math: 12,
        english: 28,
        name: "BILQEES",
        school: "SANAULLAH RAJPAR",
        coach: "Govt. Girls High School No. 1",
        category: "A"
    },
    "318": {
        science: 11,
        math: 22,
        english: 26,
        name: "ASMA",
        school: "ABDUL WAHEED",
        coach: "Govt. Girls High School No. 1",
        category: "A"
    },
    "193": {
        science: 16,
        math: 22,
        english: 29,
        name: "ZOHAIB ALI",
        school: "MUHAMMAD NAWAZ",
        coach: "CBHS Mir Colony",
        category: "A"
    },
    "103": {
        science: 9,
        math: 22,
        english: 26,
        name: "ABDUL AZEEM",
        school: "ABDUL AZIZ",
        coach: "The Educators",
        category: "A"
    },
    "134": {
        science: 16,
        math: 15,
        english: 26,
        name: "NAYAB",
        school: "WAJID ALI",
        coach: "CBHS Mir Colony",
        category: "A"
    },
    "104": {
        science: 9,
        math: 23,
        english: 24,
        name: "ALI AHSAN",
        school: "AHMED KHAN",
        coach: "CBHS Mir Colony",
        category: "A"
    },
    "304": {
        science: 19,
        math: 7,
        english: 29,
        name: "KASHMALA",
        school: "TOFIQUE AHMED",
        coach: "St. Paul",
        category: "A"
    },
    "311": {
        science: 18,
        math: 13,
        english: 24,
        name: "NAZAR MUHAMMAD",
        school: "SHAHID AHMED",
        coach: "CBHS Mir Colony",
        category: "A"
    },
    "313": {
        science: 18,
        math: 13,
        english: 24,
        name: "SAFIA BURDI",
        school: "IQBAL AHMED BHATTI",
        coach: "Govt. Girls High School No. 1",
        category: "A"
    },
    "112": {
        science: 13,
        math: 16,
        english: 25,
        name: "ABDUL WAHID",
        school: "ABDUL WAHEED",
        coach: "CBHS Mir Colony",
        category: "A"
    },
    "142": {
        science: 15,
        math: 16,
        english: 23,
        name: "MURSALEEN",
        school: "AURANGZEB BHUTTO",
        coach: "CBHS Mir Colony",
        category: "A"
    },
    "119": {
        science: 21,
        math: 12,
        english: 20,
        name: "JAHZEEL BHATTI",
        school: "MAQSOOD BHATTI",
        coach: "St. Paul",
        category: "A"
    },
    "128": {
        science: 12,
        math: 20,
        english: 21,
        name: "SARMAD ALI",
        school: "GHULAM MUSTAFA",
        coach: "CBHS Mir Colony",
        category: "A"
    },
    "141": {
        science: 14,
        math: 10,
        english: 28,
        name: "ANKIT",
        school: "ASHOK KUMAR",
        coach: "CBHS Mir Colony",
        category: "A"
    },
    "309": {
        science: 11,
        math: 14,
        english: 27,
        name: "FATIMA MASROOR",
        school: "MASROOR HUSSAIN",
        coach: "St. Paul",
        category: "A"
    },
    "334": {
        science: 20,
        math: 10,
        english: 22,
        name: "AMNA CHANNA",
        school: "MUHAMMAD MOHSIN",
        coach: "Govt. Girls High School No. 1",
        category: "A"
    },
    "330": {
        science: 17,
        math: 14,
        english: 19,
        name: "ADNAN JAMAL",
        school: "M.JAMAL MAGSI",
        coach: "CBHS Mir Colony",
        category: "A"
    },
    "180": {
        science: 16,
        math: 14,
        english: 20,
        name: "ABEEHA",
        school: "ABDUL SALAM",
        coach: "Rajpoot High School",
        category: "A"
    },
    "189": {
        science: 15,
        math: 9,
        english: 26,
        name: "ASAD",
        school: "HAMMADULLAH",
        coach: "Rajpoot High School",
        category: "A"
    },
    "192": {
        science: 11,
        math: 18,
        english: 21,
        name: "ALI HYDER",
        school: "ALI AHMED",
        coach: "CBHS Mir Colony",
        category: "A"
    },
    "151": {
        science: 11,
        math: 12,
        english: 26,
        name: "RAZIYA",
        school: "MAQSOOD AHMED",
        coach: "CBHS Mir Colony",
        category: "A"
    },
    "181": {
        science: 13,
        math: 12,
        english: 24,
        name: "ALIZA",
        school: "ABDUL SATTAR",
        coach: "Rajpoot High School",
        category: "A"
    },
    "332": {
        science: 8,
        math: 21,
        english: 20,
        name: "FAHAD ALI",
        school: "GULZAR ALI",
        coach: "CBHS Mir Colony",
        category: "A"
    },
    "108": {
        science: 12,
        math: 14,
        english: 22,
        name: "MUSTAJEEB MEMON",
        school: "HABIB UR REHMAN",
        coach: "Momentous School",
        category: "A"
    },
    "125": {
        science: 9,
        math: 17,
        english: 22,
        name: "AWAIS AHMED SAMO",
        school: "MUSHTAQUE AHMED",
        coach: "CBHS Mir Colony",
        category: "A"
    },
    "159": {
        science: 0,
        math: 12,
        english: 36,
        name: "JORDAN SM GHOURI",
        school: "SHAKEEL MASHI",
        coach: "The Educators",
        category: "A"
    },
    "163": {
        science: 13,
        math: 17,
        english: 18,
        name: "LAKSH SAGAR",
        school: "SAGAR",
        coach: "Momentous School",
        category: "A"
    },
    "173": {
        science: 13,
        math: 13,
        english: 22,
        name: "SHABIRA",
        school: "WAZEER ALI",
        coach: "CBHS Mir Colony",
        category: "A"
    },
    "331": {
        science: 12,
        math: 14,
        english: 22,
        name: "TAMANA JOYO",
        school: "MANOJ KUMAR",
        coach: "CBHS Mir Colony",
        category: "A"
    },
    "312": {
        science: 18,
        math: 12,
        english: 17,
        name: "HAFSA QAMBRANI",
        school: "MUHARAN QAMBRANI",
        coach: "Govt. Girls High School No. 1",
        category: "A"
    },
    "320": {
        science: 12,
        math: 14,
        english: 22,
        name: "RUKHSANA",
        school: "KARIM BUX",
        coach: "Govt. Girls High School No. 1",
        category: "A"
    },
    "200": {
        science: 13,
        math: 8,
        english: 24,
        name: "JAZZLYN ROSE",
        school: ".....",
        coach: "St. Paul",
        category: "A"
    },
    "324": {
        science: 7,
        math: 16,
        english: 22,
        name: "TAYABA ALI",
        school: "QURBAN ALI",
        coach: "Govt. Girls High School No. 1",
        category: "A"
    },
    "122": {
        science: 13,
        math: 12,
        english: 19,
        name: "FAHAD",
        school: "GHULAM NABI",
        coach: "CBHS MIR COLONY",
        category: "A"
    },
    "168": {
        science: 3,
        math: 12,
        english: 29,
        name: "SINDHU DIL SOLANGI",
        school: "QURBAN ALI",
        coach: "CBHS Mir Colony",
        category: "A"
    },
    "328": {
        science: 13,
        math: 11,
        english: 20,
        name: "FARYAL ALI",
        school: "DAD UR REHMAN",
        coach: "Govt. Girls High School No. 1",
        category: "A"
    },
    "336": {
        science: 2,
        math: 20,
        english: 22,
        name: "RUMAN SAJJAD VEESAR",
        school: "SAJJAD HUSSAIN VEESAR",
        coach: "Allied School",
        category: "A"
    },
    "116": {
        science: 14,
        math: 10,
        english: 19,
        name: "NAFEESA VEESAR",
        school: "MUHAMMAD SULEMAN",
        coach: "CBHS Mir Colony",
        category: "A"
    },
    "191": {
        science: 15,
        math: 17,
        english: 11,
        name: "HAYAM FATIMA",
        school: "FAREED UD DIN",
        coach: "CBHS Mir Colony",
        category: "A"
    },
    "177": {
        science: 10,
        math: 9,
        english: 23,
        name: "UNZILA SAIF",
        school: "SAIFULLAH",
        coach: "CBHS Mir Colony",
        category: "A"
    },
    "182": {
        science: 17,
        math: 15,
        english: 10,
        name: "UM E KALSOOM",
        school: "AMJAD ALI",
        coach: "The Educators",
        category: "A"
    },
    "184": {
        science: 12,
        math: 14,
        english: 16,
        name: "DUA TALPUR",
        school: "ARSHAD ALI ",
        coach: "Bukhari Model High School",
        category: "A"
    },
    "335": {
        science: 0,
        math: 15,
        english: 27,
        name: "SAAHIL BHAVISHYA",
        school: "BHARAT KUMAR",
        coach: "Allied School",
        category: "A"
    },
    "114": {
        science: 3,
        math: 15,
        english: 23,
        name: "SAHIL ALI",
        school: "AIJAZ ALI MEMON",
        coach: "CBHS Mir Colony",
        category: "A"
    },
    "124": {
        science: 11,
        math: 10,
        english: 20,
        name: "AJWA MEMON",
        school: "AIJAZ ALI MEMON",
        coach: "CBHS Mir Colony",
        category: "A"
    },
    "131": {
        science: 3,
        math: 17,
        english: 21,
        name: "M. MUZAMMIL",
        school: "MUHAMMAD ALI ",
        coach: "CBHS Mir Colony",
        category: "A"
    },
    "139": {
        science: 12,
        math: 5,
        english: 23,
        name: "MAHNOOR",
        school: "MAJID ALI",
        coach: "CBHS Mir Colony",
        category: "A"
    },
    "310": {
        science: 12,
        math: 7,
        english: 21,
        name: "UBEDULLAH",
        school: "HAFIZ MEHMOOD",
        coach: "CBHS Mir Colony",
        category: "A"
    },
    "326": {
        science: 14,
        math: 10,
        english: 16,
        name: "TAYABA G. RASOOL",
        school: "GHULAM RASOOL",
        coach: "Govt. Girls High School No. 1",
        category: "A"
    },
    "166": {
        science: 3,
        math: 14,
        english: 22,
        name: "CHANDNI",
        school: "MAHESH",
        coach: "CBHS Mir Colony",
        category: "A"
    },
    "317": {
        science: 10,
        math: 12,
        english: 16,
        name: "AYESHA PARYAL",
        school: "MUHAMMAD PARYAL",
        coach: "Govt. Girls High School No. 1",
        category: "A"
    },
    "135": {
        science: 5,
        math: 14,
        english: 18,
        name: "MUHAMMAD ADEEM",
        school: "MUHAMMAD HASSAN",
        coach: "CBHS Mir Colony",
        category: "A"
    },
    "321": {
        science: 11,
        math: 11,
        english: 15,
        name: "JAWERIA",
        school: "Govt. Girls High School No. 1",
        coach: "Govt. Girls High School No. 1",
        category: "A"
    },
    "109": {
        science: 0,
        math: 8,
        english: 28,
        name: "UMAIMA MEMON",
        school: "SHAM UR REHMAN",
        coach: "Momentous School",
        category: "A"
    },
    "178": {
        science: 11,
        math: 14,
        english: 10,
        name: "MAROOF AHMED",
        school: "MAQSOOD AHNED",
        coach: "CBHS MIR COLONY",
        category: "A"
    },
    "172": {
        science: 2,
        math: 9,
        english: 22,
        name: "DANIYAL AKRAM",
        school: "AKRAM MAGSI",
        coach: "CBHS Mir Colony",
        category: "A"
    },
    "314": {
        science: 6,
        math: 0,
        english: 27,
        name: "KIRAN",
        school: "HAJJAN BHATTI",
        coach: "Govt. Girls High School No. 1",
        category: "A"
    },
    "111": {
        science: 12,
        math: 5,
        english: 15,
        name: "TAMEER HUSSAIN",
        school: ".......",
        coach: "Momentous School",
        category: "A"
    },
    "115": {
        science: 9,
        math: 11,
        english: 11,
        name: "BHAVISH KUMAR",
        school: "ASHOK KUMAR",
        coach: "CBHS Mir Colony",
        category: "A"
    },
    "183": {
        science: 12,
        math: 7,
        english: 12,
        name: "ABDUL SAMAD",
        school: "AMJAD ALI",
        coach: "The Educators",
        category: "A"
    },
    "325": {
        science: 10,
        math: 10,
        english: 11,
        name: "KASHAF",
        school: "KHAIR MUHAMMAD",
        coach: "Govt. Girls High School No. 1",
        category: "A"
    },
    "315": {
        science: 6,
        math: 0,
        english: 21,
        name: "DUA JAMALI",
        school: "MUHAMMAD JAMAL",
        coach: "Govt. Girls High School No. 1",
        category: "A"
    },
    "327": {
        science: 10,
        math: 5,
        english: 11,
        name: "FARHANA",
        school: "ALI AHMED",
        coach: "Govt. Girls High School No. 1",
        category: "A"
    },
    "106": {
        science: 5,
        math: 9,
        english: 10,
        name: "SAIFULLAH JISKANI",
        school: "MOLA BUX",
        coach: "Govt. Boys School No. 1",
        category: "A"
    },
    "121": {
        science: 2,
        math: 8,
        english: 14,
        name: "HUSSNAIN TUNIO",
        school: "ATHAR TUNIO",
        coach: "Noor Public School",
        category: "A"
    },
    "110": {
        science: 5,
        math: 8,
        english: 8,
        name: "WAJEEH-UR-REHMAN",
        school: "NAHEEB UR REHMAN",
        coach: "Momentous School",
        category: "A"
    },
    "129": {
        science: "A",
        math: "A",
        english: "A",
        name: "MUHAMMAD ALI",
        school: "SIRAJ AHMED",
        coach: "CBHS Mir Colony",
        category: "A"
    },
    "147": {
        science: "A",
        math: "A",
        english: "A",
        name: "SHIFA CHAND",
        school: "SHAH MUHAMMAD",
        coach: "CBHS Mir Colony",
        category: "A"
    },
    "188": {
        science: "A",
        math: "A",
        english: "A",
        name: "AFIFA",
        school: "FAISAL ALI",
        coach: "Bukhari Model High School",
        category: "A"
    },
    "157": {
        science: "A",
        math: "A",
        english: "A",
        name: "ANSHA",
        school: "KABEER BUX",
        coach: "Bukhari Model High School",
        category: "A"
    },
    "175": {
        science: "A",
        math: "A",
        english: "A",
        name: "NAUMAN",
        school: "HAJI NOOR MUHAMMAD",
        coach: "Momentous School",
        category: "A"
    }







    



    // Add more roll numbers and marks as needed
};



function displayMarks() {
    const rollNumber = document.getElementById('rollNumber').value;
      
    
if (studentMarks.hasOwnProperty(rollNumber)) {
    const marks = studentMarks[rollNumber];
    const name = marks.name; // Get the name from the studentMarks object
    const school = marks.school; // Get the school name from the studentMarks object




        document.getElementById("tblCustomers").style.display = "table";
           
        document.getElementById('nameOutput').textContent = name;
        document.getElementById('schoolOutput').textContent = school;
        
        document.getElementById('institute').textContent = marks.coach;
        document.getElementById('at').textContent = marks.category;

        document.getElementById('scienceMarks').textContent = marks.science;
        document.getElementById('mathMarks').textContent = marks.math;
        document.getElementById('englishMarks').textContent = marks.english;
        
    


         
         
 // Calculate the percentage
        const totalMarks = marks.science + marks.math + marks.english;
         document.getElementById('totalmarks').textContent =  totalMarks;

         

         const percentage = (totalMarks / 120) * 100; // Assuming total marks for all subjects is 300
         document.getElementById('percentage').innerHTML = percentage.toFixed(2) + "%";
     }
 }

// Add the following code to include the PDF generation functionality

// Include jQuery, pdfmake, and html2canvas scripts
const jqueryScript = document.createElement('script');
jqueryScript.type = 'text/javascript';
jqueryScript.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js';
document.head.appendChild(jqueryScript);

const pdfMakeScript = document.createElement('script');
pdfMakeScript.type = 'text/javascript';
pdfMakeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.22/pdfmake.min.js';
document.head.appendChild(pdfMakeScript);

const html2canvasScript = document.createElement('script');
html2canvasScript.type = 'text/javascript';
html2canvasScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js';
document.head.appendChild(html2canvasScript);

// Wait for the scripts to load before adding the click event listener
jqueryScript.onload = pdfMakeScript.onload = html2canvasScript.onload = function () {
    $("body").on("click", "#btnExport", function () {
        html2canvas($('#tblCustomers')[0], {
            onrendered: function (canvas) {
                var data = canvas.toDataURL();
                var docDefinition = {
                    content: [{
                        image: data,
                        width: 500
                    }]
                };
                pdfMake.createPdf(docDefinition).download("customer-details.pdf");
            }
        });
    });
};