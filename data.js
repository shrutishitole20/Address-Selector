/**
 * Dynamic Country, State, and City / Location Dataset
 * 
 * Contains 45+ countries across all continents with comprehensive
 * states/provinces and major cities/locations.
 * Structured hierarchically: Country -> States -> Cities
 */

const countryMeta = {
  "Argentina": { flag: "🇦🇷", code: "AR", continent: "South America" },
  "Australia": { flag: "🇦🇺", code: "AU", continent: "Oceania" },
  "Austria": { flag: "🇦🇹", code: "AT", continent: "Europe" },
  "Bangladesh": { flag: "🇧🇩", code: "BD", continent: "Asia" },
  "Belgium": { flag: "🇧🇪", code: "BE", continent: "Europe" },
  "Brazil": { flag: "🇧🇷", code: "BR", continent: "South America" },
  "Canada": { flag: "🇨🇦", code: "CA", continent: "North America" },
  "Chile": { flag: "🇨🇱", code: "CL", continent: "South America" },
  "China": { flag: "🇨🇳", code: "CN", continent: "Asia" },
  "Colombia": { flag: "🇨🇴", code: "CO", continent: "South America" },
  "Denmark": { flag: "🇩🇰", code: "DK", continent: "Europe" },
  "Egypt": { flag: "🇪🇬", code: "EG", continent: "Africa" },
  "Finland": { flag: "🇫🇮", code: "FI", continent: "Europe" },
  "France": { flag: "🇫🇷", code: "FR", continent: "Europe" },
  "Georgia": { flag: "🇬🇪", code: "GE", continent: "Europe / Asia" },
  "Germany": { flag: "🇩🇪", code: "DE", continent: "Europe" },
  "Ghana": { flag: "🇬🇭", code: "GH", continent: "Africa" },
  "Greece": { flag: "🇬🇷", code: "GR", continent: "Europe" },
  "Guatemala": { flag: "🇬🇹", code: "GT", continent: "Central America" },
  "Guyana": { flag: "🇬🇾", code: "GY", continent: "South America" },
  "Haiti": { flag: "🇭🇹", code: "HT", continent: "Caribbean" },
  "Heard Island and Mcdonald Islands": { flag: "🇭🇲", code: "HM", continent: "Antarctica / Oceania" },
  "Honduras": { flag: "🇭🇳", code: "HN", continent: "Central America" },
  "Hong Kong": { flag: "🇭🇰", code: "HK", continent: "Asia" },
  "Hungary": { flag: "🇭🇺", code: "HU", continent: "Europe" },
  "Iceland": { flag: "🇮🇸", code: "IS", continent: "Europe" },
  "India": { flag: "🇮🇳", code: "IN", continent: "Asia" },
  "Indonesia": { flag: "🇮🇩", code: "ID", continent: "Asia" },
  "Ireland": { flag: "🇮🇪", code: "IE", continent: "Europe" },
  "Italy": { flag: "🇮🇹", code: "IT", continent: "Europe" },
  "Japan": { flag: "🇯🇵", code: "JP", continent: "Asia" },
  "Kenya": { flag: "🇰🇪", code: "KE", continent: "Africa" },
  "Malaysia": { flag: "🇲🇾", code: "MY", continent: "Asia" },
  "Mexico": { flag: "🇲🇽", code: "MX", continent: "North America" },
  "Nepal": { flag: "🇳🇵", code: "NP", continent: "Asia" },
  "Netherlands": { flag: "🇳🇱", code: "NL", continent: "Europe" },
  "New Zealand": { flag: "🇳🇿", code: "NZ", continent: "Oceania" },
  "Nigeria": { flag: "🇳🇬", code: "NG", continent: "Africa" },
  "Norway": { flag: "🇳🇴", code: "NO", continent: "Europe" },
  "Oman": { flag: "🇴🇲", code: "OM", continent: "Middle East" },
  "Pakistan": { flag: "🇵🇰", code: "PK", continent: "Asia" },
  "Peru": { flag: "🇵🇪", code: "PE", continent: "South America" },
  "Philippines": { flag: "🇵🇭", code: "PH", continent: "Asia" },
  "Poland": { flag: "🇵🇱", code: "PL", continent: "Europe" },
  "Portugal": { flag: "🇵🇹", code: "PT", continent: "Europe" },
  "Qatar": { flag: "🇶🇦", code: "QA", continent: "Middle East" },
  "Russia": { flag: "🇷🇺", code: "RU", continent: "Europe / Asia" },
  "Saudi Arabia": { flag: "🇸🇦", code: "SA", continent: "Middle East" },
  "Singapore": { flag: "🇸🇬", code: "SG", continent: "Asia" },
  "South Africa": { flag: "🇿🇦", code: "ZA", continent: "Africa" },
  "South Korea": { flag: "🇰🇷", code: "KR", continent: "Asia" },
  "Spain": { flag: "🇪🇸", code: "ES", continent: "Europe" },
  "Sri Lanka": { flag: "🇱🇰", code: "LK", continent: "Asia" },
  "Sweden": { flag: "🇸🇪", code: "SE", continent: "Europe" },
  "Switzerland": { flag: "🇨🇭", code: "CH", continent: "Europe" },
  "Thailand": { flag: "🇹🇭", code: "TH", continent: "Asia" },
  "Turkey": { flag: "🇹🇷", code: "TR", continent: "Europe / Asia" },
  "United Arab Emirates": { flag: "🇦🇪", code: "AE", continent: "Middle East" },
  "United Kingdom": { flag: "🇬🇧", code: "GB", continent: "Europe" },
  "United States": { flag: "🇺🇸", code: "US", continent: "North America" },
  "Vietnam": { flag: "🇻🇳", code: "VN", continent: "Asia" }
};

const locationData = {
  "Guyana": {
    "Demerara-Mahaica": [
      "Georgetown",
      "Buxton",
      "Enmore",
      "Plaisance",
      "Triumph"
    ],
    "East Berbice-Corentyne": [
      "New Amsterdam",
      "Corriverton",
      "Rose Hall",
      "Skeldon"
    ],
    "Essequibo Islands-West Demerara": [
      "Vreed en Hoop",
      "Parika",
      "Uitvlugt",
      "Leonora"
    ],
    "Upper Demerara-Berbice": [
      "Linden",
      "Ituni",
      "Kwakwani"
    ]
  },

  "Haiti": {
    "Ouest Department": [
      "Port-au-Prince",
      "Delmas",
      "Pétion-Ville",
      "Carrefour",
      "Cité Soleil",
      "Tabarre"
    ],
    "Nord Department": [
      "Cap-Haïtien",
      "Limbé",
      "Plaine-du-Nord",
      "Acul-du-Nord"
    ],
    "Artibonite Department": [
      "Gonaïves",
      "Saint-Marc",
      "Verrettes",
      "Dessalines"
    ],
    "Sud Department": [
      "Les Cayes",
      "Port-Salut",
      "Aquin",
      "Camp-Perrin"
    ]
  },

  "Heard Island and Mcdonald Islands": {
    "Heard Island Territory": [
      "Atlas Cove",
      "Spit Bay",
      "Corinthian Bay",
      "Atlas Roadstead",
      "Southwest Bay"
    ],
    "McDonald Islands Territory": [
      "McDonald Island Central",
      "Meyer Rock",
      "Williams Bay"
    ]
  },

  "Honduras": {
    "Francisco Morazán": [
      "Tegucigalpa",
      "Comayagüela",
      "Valle de Ángeles",
      "Santa Lucía",
      "Ojojona"
    ],
    "Cortés": [
      "San Pedro Sula",
      "Puerto Cortés",
      "Choloma",
      "Villanueva",
      "La Lima"
    ],
    "Atlántida": [
      "La Ceiba",
      "Tela",
      "Jutiapa",
      "El Porvenir"
    ],
    "Bay Islands (Islas de la Bahía)": [
      "Coxen Hole (Roatán)",
      "French Harbour",
      "West End",
      "Utila"
    ]
  },

  "Hong Kong": {
    "Hong Kong Island": [
      "Central & Western",
      "Wan Chai",
      "Causeway Bay",
      "Aberdeen",
      "Quarry Bay",
      "North Point",
      "Stanley"
    ],
    "Kowloon": [
      "Tsim Sha Tsui",
      "Mong Kok",
      "Sham Shui Po",
      "Kowloon City",
      "Kwun Tong",
      "Wong Tai Sin"
    ],
    "New Territories": [
      "Sha Tin",
      "Tsuen Wan",
      "Tuen Mun",
      "Tai Po",
      "Yuen Long",
      "Sai Kung",
      "Tseung Kwan O"
    ],
    "Islands District": [
      "Tung Chung (Lantau)",
      "Discovery Bay",
      "Cheung Chau",
      "Mui Wo"
    ]
  },

  "Hungary": {
    "Central Hungary (Budapest)": [
      "Budapest Inner City (Belváros)",
      "Buda Castle District (Várkerület)",
      "Pest Central",
      "Óbuda",
      "Zugló",
      "Újpest",
      "Kőbánya"
    ],
    "Hajdú-Bihar": [
      "Debrecen",
      "Hajdúszoboszló",
      "Hajdúböszörmény",
      "Balmazújváros",
      "Berettyóújfalu"
    ],
    "Csongrád-Csanád": [
      "Szeged",
      "Hódmezővásárhely",
      "Makó",
      "Szentes",
      "Csongrád"
    ],
    "Borsod-Abaúj-Zemplén": [
      "Miskolc",
      "Ózd",
      "Kazincbarcika",
      "Mezőkövesd",
      "Tiszaújváros"
    ],
    "Baranya": [
      "Pécs",
      "Mohács",
      "Komló",
      "Szigetvár",
      "Siklós"
    ],
    "Győr-Moson-Sopron": [
      "Győr",
      "Sopron",
      "Mosonmagyaróvár",
      "Csorna",
      "Kapuvár"
    ],
    "Fejér": [
      "Székesfehérvár",
      "Dunaújváros",
      "Mór",
      "Sárbogárd",
      "Bicske"
    ]
  },

  "Iceland": {
    "Capital Region (Höfuðborgarsvæðið)": [
      "Reykjavík",
      "Kópavogur",
      "Hafnarfjörður",
      "Garðabær",
      "Mosfellsbær",
      "Seltjarnarnes"
    ],
    "Southern Peninsula (Suðurnes)": [
      "Keflavík",
      "Njarðvík",
      "Grindavík",
      "Sandgerði",
      "Garður"
    ],
    "Southern Region (Suðurland)": [
      "Selfoss",
      "Hveragerði",
      "Vestmannaeyjar (Westman Islands)",
      "Vík í Mýrdal",
      "Þorlákshöfn"
    ],
    "Northeastern Region (Norðurland eystra)": [
      "Akureyri",
      "Húsavík",
      "Dalvík",
      "Fjallabyggð (Siglufjörður)"
    ],
    "Western Region (Vesturland)": [
      "Akranes",
      "Borgarnes",
      "Stykkishólmur",
      "Grundarfjörður"
    ]
  },

  "India": {
    "Maharashtra": [
      "Pune",
      "Mumbai",
      "Nagpur",
      "Nashik",
      "Kolhapur",
      "Aurangabad (Chhatrapati Sambhajinagar)",
      "Thane",
      "Solapur",
      "Amravati",
      "Navi Mumbai",
      "Pimpri-Chinchwad",
      "Kalyan-Dombivli",
      "Vasai-Virar",
      "Jalgaon",
      "Akola",
      "Latur",
      "Dhule",
      "Ahmednagar",
      "Chandrapur",
      "Parbhani",
      "Satara",
      "Sangli",
      "Ratnagiri",
      "Nanded"
    ],
    "Karnataka": [
      "Bengaluru",
      "Mysuru",
      "Hubballi-Dharwad",
      "Mangaluru",
      "Belagavi",
      "Kalaburagi",
      "Ballari",
      "Vijayapura",
      "Shivamogga",
      "Tumakuru",
      "Davanagere",
      "Udupi",
      "Bidar",
      "Hassan"
    ],
    "Gujarat": [
      "Ahmedabad",
      "Surat",
      "Vadodara",
      "Rajkot",
      "Bhavnagar",
      "Jamnagar",
      "Gandhinagar",
      "Junagadh",
      "Anand",
      "Navsari",
      "Morbi",
      "Bharuch",
      "Porbandar"
    ],
    "Tamil Nadu": [
      "Chennai",
      "Coimbatore",
      "Madurai",
      "Tiruchirappalli",
      "Salem",
      "Tirunelveli",
      "Tiruppur",
      "Vellore",
      "Erode",
      "Thoothukudi",
      "Dindigul",
      "Thanjavur",
      "Kanchipuram"
    ],
    "Delhi": [
      "New Delhi",
      "North Delhi",
      "South Delhi",
      "West Delhi",
      "East Delhi",
      "Central Delhi",
      "North East Delhi",
      "North West Delhi",
      "South West Delhi",
      "South East Delhi",
      "Shahdara"
    ],
    "Rajasthan": [
      "Jaipur",
      "Jodhpur",
      "Udaipur",
      "Kota",
      "Bikaner",
      "Ajmer",
      "Bhilwara",
      "Alwar",
      "Sikar",
      "Sri Ganganagar",
      "Pali",
      "Bharatpur"
    ],
    "Uttar Pradesh": [
      "Lucknow",
      "Kanpur",
      "Varanasi",
      "Agra",
      "Prayagraj",
      "Noida",
      "Greater Noida",
      "Ghaziabad",
      "Meerut",
      "Bareilly",
      "Aligarh",
      "Moradabad",
      "Saharanpur",
      "Gorakhpur",
      "Ayodhya",
      "Mathura"
    ],
    "Kerala": [
      "Thiruvananthapuram",
      "Kochi",
      "Kozhikode",
      "Thrissur",
      "Kollam",
      "Alappuzha",
      "Kannur",
      "Palakkad",
      "Kottayam",
      "Malappuram",
      "Kasaragod"
    ],
    "Telangana": [
      "Hyderabad",
      "Warangal",
      "Nizamabad",
      "Karimnagar",
      "Khammam",
      "Ramagundam",
      "Mahbubnagar",
      "Nalgonda",
      "Adilabad",
      "Siddipet"
    ],
    "Andhra Pradesh": [
      "Visakhapatnam",
      "Vijayawada",
      "Guntur",
      "Nellore",
      "Kurnool",
      "Rajahmundry",
      "Tirupati",
      "Kakinada",
      "Anantapur",
      "Kadapa"
    ],
    "West Bengal": [
      "Kolkata",
      "Howrah",
      "Asansol",
      "Siliguri",
      "Durgapur",
      "Bardhaman",
      "Malda",
      "Kharagpur",
      "Habra",
      "Darjeeling"
    ],
    "Madhya Pradesh": [
      "Indore",
      "Bhopal",
      "Jabalpur",
      "Gwalior",
      "Ujjain",
      "Sagar",
      "Dewas",
      "Satna",
      "Ratlam",
      "Rewa"
    ],
    "Punjab": [
      "Ludhiana",
      "Amritsar",
      "Jalandhar",
      "Patiala",
      "Bathinda",
      "Mohali (SAS Nagar)",
      "Hoshiarpur",
      "Pathankot",
      "Moga",
      "Batala"
    ],
    "Haryana": [
      "Gurugram",
      "Faridabad",
      "Panipat",
      "Ambala",
      "Yamunanagar",
      "Rohtak",
      "Hisar",
      "Karnal",
      "Sonipat",
      "Panchkula"
    ],
    "Goa": [
      "Panaji",
      "Margao",
      "Vasco da Gama",
      "Mapusa",
      "Ponda",
      "Bicholim",
      "Curchorem"
    ],
    "Bihar": [
      "Patna",
      "Gaya",
      "Bhagalpur",
      "Muzaffarpur",
      "Purnia",
      "Darbhanga",
      "Bihar Sharif",
      "Arrah",
      "Begusarai"
    ],
    "Odisha": [
      "Bhubaneswar",
      "Cuttack",
      "Rourkela",
      "Berhampur",
      "Sambalpur",
      "Puri",
      "Balasore",
      "Bhadrak"
    ],
    "Himachal Pradesh": [
      "Shimla",
      "Dharamshala",
      "Mandi",
      "Solan",
      "Kullu",
      "Manali",
      "Bilaspur",
      "Chamba"
    ],
    "Uttarakhand": [
      "Dehradun",
      "Haridwar",
      "Rishikesh",
      "Roorkee",
      "Haldwani",
      "Nainital",
      "Rudrapur",
      "Kashipur"
    ],
    "Assam": [
      "Guwahati",
      "Silchar",
      "Dibrugarh",
      "Jorhat",
      "Nagaon",
      "Tinsukia",
      "Tezpur",
      "Bongaigaon"
    ],
    "Jammu and Kashmir": [
      "Srinagar",
      "Jammu",
      "Anantnag",
      "Baramulla",
      "Kathua",
      "Udhampur",
      "Sopore"
    ]
  },

  "United States": {
    "California": [
      "Los Angeles",
      "San Francisco",
      "San Diego",
      "San Jose",
      "Sacramento",
      "Oakland",
      "Fresno",
      "Long Beach",
      "Bakersfield",
      "Anaheim",
      "Santa Ana",
      "Riverside",
      "Irvine",
      "Pasadena"
    ],
    "New York": [
      "New York City",
      "Buffalo",
      "Rochester",
      "Albany",
      "Syracuse",
      "Yonkers",
      "New Rochelle",
      "Mount Vernon",
      "Schenectady",
      "Utica"
    ],
    "Texas": [
      "Houston",
      "Austin",
      "Dallas",
      "San Antonio",
      "Fort Worth",
      "El Paso",
      "Arlington",
      "Corpus Christi",
      "Plano",
      "Lubbock",
      "Irving",
      "Laredo"
    ],
    "Florida": [
      "Miami",
      "Orlando",
      "Tampa",
      "Jacksonville",
      "Tallahassee",
      "St. Petersburg",
      "Hialeah",
      "Fort Lauderdale",
      "Cape Coral",
      "Gainesville"
    ],
    "Washington": [
      "Seattle",
      "Spokane",
      "Tacoma",
      "Vancouver",
      "Bellevue",
      "Everett",
      "Kent",
      "Renton",
      "Olympia"
    ],
    "Illinois": [
      "Chicago",
      "Aurora",
      "Naperville",
      "Rockford",
      "Springfield",
      "Joliet",
      "Peoria",
      "Elgin",
      "Champaign"
    ],
    "Massachusetts": [
      "Boston",
      "Worcester",
      "Springfield",
      "Cambridge",
      "Lowell",
      "Brockton",
      "Quincy",
      "Lynn"
    ],
    "Pennsylvania": [
      "Philadelphia",
      "Pittsburgh",
      "Allentown",
      "Reading",
      "Erie",
      "Scranton",
      "Bethlehem",
      "Lancaster",
      "Harrisburg"
    ],
    "Georgia": [
      "Atlanta",
      "Augusta",
      "Columbus",
      "Macon",
      "Savannah",
      "Athens",
      "Sandy Springs",
      "Roswell"
    ],
    "North Carolina": [
      "Charlotte",
      "Raleigh",
      "Greensboro",
      "Durham",
      "Winston-Salem",
      "Fayetteville",
      "Cary",
      "Wilmington"
    ],
    "Ohio": [
      "Columbus",
      "Cleveland",
      "Cincinnati",
      "Toledo",
      "Akron",
      "Dayton",
      "Parma",
      "Canton"
    ],
    "Colorado": [
      "Denver",
      "Colorado Springs",
      "Aurora",
      "Fort Collins",
      "Lakewood",
      "Thornton",
      "Arvada",
      "Boulder"
    ],
    "Arizona": [
      "Phoenix",
      "Tucson",
      "Mesa",
      "Chandler",
      "Scottsdale",
      "Glendale",
      "Gilbert",
      "Tempe"
    ],
    "Nevada": [
      "Las Vegas",
      "Henderson",
      "Reno",
      "North Las Vegas",
      "Sparks",
      "Carson City"
    ],
    "New Jersey": [
      "Newark",
      "Jersey City",
      "Paterson",
      "Elizabeth",
      "Edison",
      "Trenton",
      "Clifton",
      "Camden"
    ]
  },

  "Canada": {
    "Ontario": [
      "Toronto",
      "Ottawa",
      "Mississauga",
      "Hamilton",
      "London",
      "Brampton",
      "Markham",
      "Vaughan",
      "Kitchener",
      "Windsor",
      "Richmond Hill",
      "Oakville"
    ],
    "Quebec": [
      "Montreal",
      "Quebec City",
      "Laval",
      "Gatineau",
      "Longueuil",
      "Sherbrooke",
      "Saguenay",
      "Lévis",
      "Trois-Rivières"
    ],
    "British Columbia": [
      "Vancouver",
      "Victoria",
      "Surrey",
      "Burnaby",
      "Richmond",
      "Kelowna",
      "Abbotsford",
      "Coquitlam",
      "Nanaimo",
      "Kamloops"
    ],
    "Alberta": [
      "Calgary",
      "Edmonton",
      "Red Deer",
      "Lethbridge",
      "St. Albert",
      "Medicine Hat",
      "Grande Prairie",
      "Airdrie"
    ],
    "Manitoba": [
      "Winnipeg",
      "Brandon",
      "Steinbach",
      "Thompson",
      "Portage la Prairie"
    ],
    "Saskatchewan": [
      "Saskatoon",
      "Regina",
      "Prince Albert",
      "Moose Jaw",
      "Swift Current"
    ],
    "Nova Scotia": [
      "Halifax",
      "Dartmouth",
      "Sydney",
      "Truro",
      "New Glasgow"
    ]
  },

  "Australia": {
    "New South Wales": [
      "Sydney",
      "Newcastle",
      "Central Coast",
      "Wollongong",
      "Maitland",
      "Tweed Heads",
      "Albury",
      "Wagga Wagga",
      "Port Macquarie",
      "Tamworth",
      "Orange",
      "Dubbo"
    ],
    "Victoria": [
      "Melbourne",
      "Geelong",
      "Ballarat",
      "Bendigo",
      "Shepparton",
      "Mildura",
      "Warrnambool",
      "Traralgon",
      "Wangaratta"
    ],
    "Queensland": [
      "Brisbane",
      "Gold Coast",
      "Sunshine Coast",
      "Townsville",
      "Cairns",
      "Toowoomba",
      "Mackay",
      "Rockhampton",
      "Bundaberg",
      "Hervey Bay"
    ],
    "Western Australia": [
      "Perth",
      "Bunbury",
      "Geraldton",
      "Albany",
      "Busselton",
      "Kalgoorlie",
      "Karratha",
      "Broome"
    ],
    "South Australia": [
      "Adelaide",
      "Mount Gambier",
      "Whyalla",
      "Gawler",
      "Port Augusta",
      "Port Lincoln",
      "Murray Bridge"
    ],
    "Tasmania": [
      "Hobart",
      "Launceston",
      "Devonport",
      "Burnie",
      "Kingston",
      "Ulverstone"
    ],
    "Australian Capital Territory": [
      "Canberra",
      "Belconnen",
      "Tuggeranong",
      "Gungahlin",
      "Woden Valley"
    ]
  },

  "United Kingdom": {
    "England": [
      "London",
      "Manchester",
      "Birmingham",
      "Liverpool",
      "Leeds",
      "Bristol",
      "Newcastle",
      "Sheffield",
      "Nottingham",
      "Leicester",
      "Southampton",
      "Brighton",
      "Oxford",
      "Cambridge",
      "Bath",
      "York"
    ],
    "Scotland": [
      "Edinburgh",
      "Glasgow",
      "Aberdeen",
      "Dundee",
      "Inverness",
      "Stirling",
      "Perth",
      "Paisley",
      "Dunfermline"
    ],
    "Wales": [
      "Cardiff",
      "Swansea",
      "Newport",
      "Wrexham",
      "Bangor",
      "St Asaph",
      "St Davids"
    ],
    "Northern Ireland": [
      "Belfast",
      "Derry (Londonderry)",
      "Lisburn",
      "Newry",
      "Armagh",
      "Bangor",
      "Coleraine"
    ]
  },

  "Germany": {
    "Bavaria": [
      "Munich",
      "Nuremberg",
      "Augsburg",
      "Regensburg",
      "Würzburg",
      "Ingolstadt",
      "Fürth",
      "Erlangen",
      "Bamberg",
      "Bayreuth"
    ],
    "Berlin": [
      "Berlin Mitte",
      "Pankow",
      "Charlottenburg",
      "Spandau",
      "Kreuzberg",
      "Neukölln",
      "Tempelhof",
      "Steglitz"
    ],
    "North Rhine-Westphalia": [
      "Cologne",
      "Düsseldorf",
      "Dortmund",
      "Essen",
      "Bonn",
      "Duisburg",
      "Bochum",
      "Wuppertal",
      "Bielefeld",
      "Münster",
      "Aachen"
    ],
    "Baden-Württemberg": [
      "Stuttgart",
      "Karlsruhe",
      "Mannheim",
      "Freiburg",
      "Heidelberg",
      "Ulm",
      "Heilbronn",
      "Pforzheim",
      "Reutlingen"
    ],
    "Hesse": [
      "Frankfurt am Main",
      "Wiesbaden",
      "Kassel",
      "Darmstadt",
      "Offenbach am Main",
      "Hanau",
      "Gießen"
    ],
    "Hamburg": [
      "Hamburg-Mitte",
      "Altona",
      "Eimsbüttel",
      "Hamburg-Nord",
      "Wandsbek",
      "Bergedorf",
      "Harburg"
    ],
    "Saxony": [
      "Leipzig",
      "Dresden",
      "Chemnitz",
      "Zwickau",
      "Plauen",
      "Görlitz"
    ]
  },

  "France": {
    "Île-de-France": [
      "Paris",
      "Boulogne-Billancourt",
      "Saint-Denis",
      "Argenteuil",
      "Versailles",
      "Montreuil",
      "Nanterre",
      "Créteil",
      "Courbevoie"
    ],
    "Auvergne-Rhône-Alpes": [
      "Lyon",
      "Saint-Étienne",
      "Grenoble",
      "Villeurbanne",
      "Clermont-Ferrand",
      "Annecy",
      "Chambéry",
      "Valence"
    ],
    "Provence-Alpes-Côte d'Azur": [
      "Marseille",
      "Nice",
      "Toulon",
      "Aix-en-Provence",
      "Avignon",
      "Cannes",
      "Antibes",
      "La Seyne-sur-Mer"
    ],
    "Nouvelle-Aquitaine": [
      "Bordeaux",
      "Limoges",
      "Poitiers",
      "Pau",
      "La Rochelle",
      "Mérignac",
      "Pessac",
      "Bayonne"
    ],
    "Occitanie": [
      "Toulouse",
      "Montpellier",
      "Nîmes",
      "Perpignan",
      "Béziers",
      "Montauban",
      "Tarbes"
    ],
    "Hauts-de-France": [
      "Lille",
      "Amiens",
      "Roubaix",
      "Tourcoing",
      "Dunkirk",
      "Calais",
      "Villeneuve-d'Ascq"
    ]
  },

  "Japan": {
    "Tokyo": [
      "Shinjuku",
      "Shibuya",
      "Chiyoda",
      "Minato",
      "Ginza",
      "Setagaya",
      "Toshima (Ikebukuro)",
      "Koto",
      "Ota",
      "Nakano",
      "Hachioji",
      "Machida"
    ],
    "Osaka": [
      "Osaka City",
      "Sakai",
      "Higashiosaka",
      "Toyonaka",
      "Suita",
      "Takatsuki",
      "Hirakata",
      "Yao",
      "Ibaraki"
    ],
    "Kyoto": [
      "Kyoto City",
      "Uji",
      "Kameoka",
      "Maizuru",
      "Joyo",
      "Nagaokakyo",
      "Fukuchiyama"
    ],
    "Kanagawa": [
      "Yokohama",
      "Kawasaki",
      "Sagamihara",
      "Fujisawa",
      "Kamakura",
      "Yokosuka",
      "Odawara",
      "Atsugi"
    ],
    "Hokkaido": [
      "Sapporo",
      "Asahikawa",
      "Hakodate",
      "Tomakomai",
      "Obihiro",
      "Kushiro",
      "Otaru",
      "Kitami"
    ],
    "Aichi": [
      "Nagoya",
      "Toyota",
      "Toyohashi",
      "Okazaki",
      "Ichinomiya",
      "Kasugai",
      "Anjo"
    ],
    "Fukuoka": [
      "Fukuoka City",
      "Kitakyushu",
      "Kurume",
      "Omuta",
      "Iizuka",
      "Kasuga"
    ]
  },

  "Brazil": {
    "São Paulo": [
      "São Paulo City",
      "Campinas",
      "Guarulhos",
      "São Bernardo do Campo",
      "Santo André",
      "Ribeirão Preto",
      "Osasco",
      "Sorocaba",
      "Santos",
      "São José dos Campos"
    ],
    "Rio de Janeiro": [
      "Rio de Janeiro City",
      "Niterói",
      "Duque de Caxias",
      "Nova Iguaçu",
      "Petrópolis",
      "São Gonçalo",
      "Campos dos Goytacazes",
      "Volta Redonda"
    ],
    "Minas Gerais": [
      "Belo Horizonte",
      "Uberlândia",
      "Contagem",
      "Juiz de Fora",
      "Betim",
      "Montes Claros",
      "Uberaba",
      "Governador Valadares"
    ],
    "Bahia": [
      "Salvador",
      "Feira de Santana",
      "Vitória da Conquista",
      "Camaçari",
      "Itabuna",
      "Juazeiro",
      "Ilhéus",
      "Porto Seguro"
    ],
    "Paraná": [
      "Curitiba",
      "Londrina",
      "Maringá",
      "Ponta Grossa",
      "Cascavel",
      "Foz do Iguaçu",
      "São José dos Pinhais"
    ],
    "Rio Grande do Sul": [
      "Porto Alegre",
      "Caxias do Sul",
      "Pelotas",
      "Canoas",
      "Santa Maria",
      "Gravataí",
      "Novo Hamburgo"
    ]
  },

  "South Africa": {
    "Gauteng": [
      "Johannesburg",
      "Pretoria",
      "Soweto",
      "Centurion",
      "Sandton",
      "Roodepoort",
      "Benoni",
      "Boksburg",
      "Krugersdorp"
    ],
    "Western Cape": [
      "Cape Town",
      "Stellenbosch",
      "George",
      "Paarl",
      "Worcester",
      "Mossel Bay",
      "Knysna",
      "Hermanus"
    ],
    "KwaZulu-Natal": [
      "Durban",
      "Pietermaritzburg",
      "Newcastle",
      "Pinetown",
      "Richards Bay",
      "Port Shepstone",
      "Ladysmith"
    ],
    "Eastern Cape": [
      "Gqeberha (Port Elizabeth)",
      "East London",
      "Mthatha",
      "Makhanda",
      "Uitenhage",
      "Queenstown"
    ],
    "Free State": [
      "Bloemfontein",
      "Welkom",
      "Sasolburg",
      "Bethlehem",
      "Kroonstad"
    ]
  },

  "China": {
    "Beijing": [
      "Dongcheng",
      "Xicheng",
      "Chaoyang",
      "Haidian",
      "Fengtai",
      "Shijingshan",
      "Tongzhou",
      "Changping"
    ],
    "Shanghai": [
      "Pudong",
      "Huangpu",
      "Xuhui",
      "Jing'an",
      "Minhang",
      "Changning",
      "Hongkou",
      "Yangpu",
      "Songjiang"
    ],
    "Guangdong": [
      "Guangzhou",
      "Shenzhen",
      "Dongguan",
      "Foshan",
      "Zhuhai",
      "Huizhou",
      "Zhongshan",
      "Shantou",
      "Jiangmen"
    ],
    "Zhejiang": [
      "Hangzhou",
      "Ningbo",
      "Wenzhou",
      "Shaoxing",
      "Jiaxing",
      "Jinhua",
      "Taizhou",
      "Huzhou"
    ],
    "Jiangsu": [
      "Nanjing",
      "Suzhou",
      "Wuxi",
      "Changzhou",
      "Nantong",
      "Xuzhou",
      "Yangzhou",
      "Zhenjiang"
    ],
    "Sichuan": [
      "Chengdu",
      "Mianyang",
      "Nanchong",
      "Yibin",
      "Luzhou",
      "Deyang",
      "Leshan"
    ]
  },

  "Italy": {
    "Lombardy": [
      "Milan",
      "Brescia",
      "Monza",
      "Bergamo",
      "Como",
      "Varese",
      "Pavia",
      "Cremona",
      "Mantua",
      "Lecco"
    ],
    "Lazio": [
      "Rome",
      "Latina",
      "Guidonia Montecelio",
      "Fiumicino",
      "Viterbo",
      "Tivoli",
      "Civitavecchia",
      "Anzio"
    ],
    "Tuscany": [
      "Florence",
      "Pisa",
      "Siena",
      "Livorno",
      "Arezzo",
      "Lucca",
      "Pistoia",
      "Grosseto",
      "Prato"
    ],
    "Veneto": [
      "Venice",
      "Verona",
      "Padua",
      "Vicenza",
      "Treviso",
      "Rovigo",
      "Belluno",
      "Chioggia"
    ],
    "Piedmont": [
      "Turin",
      "Novara",
      "Alessandria",
      "Asti",
      "Moncalieri",
      "Cuneo",
      "Vercelli"
    ],
    "Campania": [
      "Naples",
      "Salerno",
      "Giugliano in Campania",
      "Torre del Greco",
      "Caserta",
      "Castellammare di Stabia"
    ],
    "Sicily": [
      "Palermo",
      "Catania",
      "Messina",
      "Syracuse",
      "Marsala",
      "Gela",
      "Ragusa",
      "Trapani"
    ]
  },

  "Spain": {
    "Madrid": [
      "Madrid City",
      "Móstoles",
      "Alcalá de Henares",
      "Fuenlabrada",
      "Leganés",
      "Getafe",
      "Alcorcón",
      "Torrejón de Ardoz",
      "Parla",
      "Alcobendas"
    ],
    "Catalonia": [
      "Barcelona",
      "Hospitalet de Llobregat",
      "Badalona",
      "Terrassa",
      "Sabadell",
      "Girona",
      "Tarragona",
      "Lleida",
      "Mataró",
      "Santa Coloma de Gramenet"
    ],
    "Andalusia": [
      "Seville",
      "Málaga",
      "Córdoba",
      "Granada",
      "Jerez de la Frontera",
      "Almería",
      "Huelva",
      "Marbella",
      "Cádiz",
      "Jaén"
    ],
    "Valencia": [
      "Valencia City",
      "Alicante",
      "Elche",
      "Castellón de la Plana",
      "Torrevieja",
      "Torrent",
      "Gandia",
      "Benidorm"
    ],
    "Basque Country": [
      "Bilbao",
      "Vitoria-Gasteiz",
      "San Sebastián (Donostia)",
      "Barakaldo",
      "Getxo",
      "Irun"
    ],
    "Galicia": [
      "Vigo",
      "A Coruña",
      "Ourense",
      "Lugo",
      "Santiago de Compostela",
      "Pontevedra"
    ]
  },

  "Mexico": {
    "Mexico City": [
      "Cuauhtémoc",
      "Iztapalapa",
      "Gustavo A. Madero",
      "Benito Juárez",
      "Coyoacán",
      "Miguel Hidalgo",
      "Álvaro Obregón",
      "Tlalpan"
    ],
    "Jalisco": [
      "Guadalajara",
      "Zapopan",
      "Tlaquepaque",
      "Tonalá",
      "Puerto Vallarta",
      "Tlajomulco de Zúñiga",
      "El Salto",
      "Lagos de Moreno"
    ],
    "Nuevo León": [
      "Monterrey",
      "Guadalupe",
      "San Pedro Garza García",
      "Apodaca",
      "San Nicolás",
      "General Escobedo",
      "Santa Catarina"
    ],
    "Puebla": [
      "Puebla City",
      "Tehuacán",
      "San Andrés Cholula",
      "Atlixco",
      "San Pedro Cholula",
      "San Martín Texmelucan"
    ],
    "Yucatán": [
      "Mérida",
      "Kanasín",
      "Valladolid",
      "Tizimín",
      "Progreso",
      "Umán"
    ],
    "Baja California": [
      "Tijuana",
      "Mexicali",
      "Ensenada",
      "Rosarito",
      "Tecate"
    ]
  },

  "Russia": {
    "Moscow Federal City": [
      "Central Moscow",
      "Northern Moscow",
      "Southern Moscow",
      "Eastern Moscow",
      "Western Moscow",
      "Zelenograd"
    ],
    "Saint Petersburg Federal City": [
      "Admiralteysky",
      "Tsentralny",
      "Vasileostrovsky",
      "Petrogradsky",
      "Vyborgsky",
      "Nevsky",
      "Primorsky"
    ],
    "Novosibirsk Oblast": [
      "Novosibirsk",
      "Berdsk",
      "Iskitim",
      "Kuybyshev",
      "Barabinsk"
    ],
    "Sverdlovsk Oblast": [
      "Yekaterinburg",
      "Nizhny Tagil",
      "Kamensk-Uralsky",
      "Pervouralsk",
      "Serov"
    ],
    "Tatarstan Republic": [
      "Kazan",
      "Naberezhnye Chelny",
      "Nizhnekamsk",
      "Almetyevsk",
      "Zelenodolsk"
    ],
    "Krasnodar Krai": [
      "Krasnodar",
      "Sochi",
      "Novorossiysk",
      "Armavir",
      "Anapa"
    ]
  },

  "South Korea": {
    "Seoul Capital Area": [
      "Gangnam",
      "Jongno",
      "Mapo",
      "Yongsan",
      "Songpa",
      "Seocho",
      "Yeongdeungpo",
      "Jung-gu",
      "Dongdaemun",
      "Seodaemun"
    ],
    "Busan Metropolitan": [
      "Haeundae",
      "Busanjin",
      "Sasang",
      "Saha",
      "Nam-gu",
      "Dongnae",
      "Buk-gu",
      "Suyeong"
    ],
    "Incheon Metropolitan": [
      "Bupyeong",
      "Namdong",
      "Yeonsu (Songdo)",
      "Jung-gu",
      "Seo-gu",
      "Michuhol",
      "Gyeyang"
    ],
    "Gyeonggi-do": [
      "Suwon",
      "Seongnam (Bundang)",
      "Goyang",
      "Yongin",
      "Bucheon",
      "Ansan",
      "Anyang",
      "Hwaseong",
      "Pyeongtaek"
    ],
    "Daegu Metropolitan": [
      "Suseong",
      "Dalseo",
      "Jung-gu",
      "Dong-gu",
      "Buk-gu"
    ],
    "Jeju Special Self-Governing": [
      "Jeju City",
      "Seogwipo",
      "Aewol",
      "Hallim",
      "Jocheon"
    ]
  },

  "Netherlands": {
    "North Holland": [
      "Amsterdam",
      "Haarlem",
      "Zaanstad",
      "Alkmaar",
      "Hilversum",
      "Amstelveen",
      "Purmerend",
      "Hoorn"
    ],
    "South Holland": [
      "Rotterdam",
      "The Hague",
      "Leiden",
      "Delft",
      "Dordrecht",
      "Zoetermeer",
      "Gouda",
      "Schiedam"
    ],
    "Utrecht": [
      "Utrecht City",
      "Amersfoort",
      "Veenendaal",
      "Zeist",
      "Nieuwegein",
      "Woerden",
      "Houten"
    ],
    "North Brabant": [
      "Eindhoven",
      "Tilburg",
      "Breda",
      "'s-Hertogenbosch",
      "Helmond",
      "Oss",
      "Roosendaal",
      "Bergen op Zoom"
    ],
    "Gelderland": [
      "Nijmegen",
      "Arnhem",
      "Apeldoorn",
      "Ede",
      "Doetinchem",
      "Barneveld"
    ]
  },

  "United Arab Emirates": {
    "Dubai": [
      "Downtown Dubai",
      "Dubai Marina",
      "Deira",
      "Bur Dubai",
      "Jumeirah",
      "Al Barsha",
      "Business Bay",
      "Palm Jumeirah",
      "JLT (Jumeirah Lakes Towers)",
      "Mirdif",
      "Dubai Hills"
    ],
    "Abu Dhabi": [
      "Abu Dhabi Island",
      "Al Ain",
      "Al Dhafra",
      "Yas Island",
      "Saadiyat Island",
      "Khalifa City",
      "Mohammed Bin Zayed City",
      "Al Reem Island"
    ],
    "Sharjah": [
      "Sharjah City",
      "Khor Fakkan",
      "Kalba",
      "Al Dhaid",
      "Dibba Al-Hisn",
      "Al Majaz",
      "Al Nahda"
    ],
    "Ajman": [
      "Ajman City",
      "Manama",
      "Masfout",
      "Al Nuaimia",
      "Al Rashidiya"
    ],
    "Ras Al Khaimah": [
      "Ras Al Khaimah City",
      "Al Nakheel",
      "Al Jazirah Al Hamra",
      "Al Hamra Village",
      "Khatt"
    ],
    "Fujairah": [
      "Fujairah City",
      "Dibba Al-Fujairah",
      "Al Bidya",
      "Masafi"
    ],
    "Umm Al Quwain": [
      "Umm Al Quwain City",
      "Falaj Al Mualla",
      "Al Salamah"
    ]
  },

  "Singapore": {
    "Central Region": [
      "Marina Bay",
      "Orchard",
      "Bukit Timah",
      "Tanjong Pagar",
      "Novena",
      "Bishan",
      "Toa Payoh",
      "Downtown Core",
      "River Valley",
      "Newton"
    ],
    "East Region": [
      "Tampines",
      "Bedok",
      "Pasir Ris",
      "Changi",
      "Geylang",
      "Marine Parade",
      "Paya Lebar"
    ],
    "West Region": [
      "Jurong East",
      "Jurong West",
      "Clementi",
      "Choa Chu Kang",
      "Bukit Batok",
      "Pioneer",
      "Boon Lay",
      "Tuas"
    ],
    "North Region": [
      "Woodlands",
      "Yishun",
      "Sembawang",
      "Lim Chu Kang",
      "Mandai",
      "Sungei Kadut"
    ],
    "North-East Region": [
      "Sengkang",
      "Punggol",
      "Hougang",
      "Serangoon",
      "Ang Mo Kio",
      "Seletar"
    ]
  },

  "New Zealand": {
    "Auckland Region": [
      "Auckland Central",
      "North Shore",
      "Manukau",
      "Waitakere",
      "Papakura",
      "Ponsonby",
      "Takapuna",
      "Albany"
    ],
    "Wellington Region": [
      "Wellington Central",
      "Lower Hutt",
      "Upper Hutt",
      "Porirua",
      "Kapiti Coast",
      "Masterton"
    ],
    "Canterbury": [
      "Christchurch",
      "Timaru",
      "Ashburton",
      "Rangiora",
      "Rolleston",
      "Kaiapoi"
    ],
    "Otago": [
      "Dunedin",
      "Queenstown",
      "Wanaka",
      "Oamaru",
      "Alexandra",
      "Cromwell"
    ],
    "Waikato": [
      "Hamilton",
      "Taupo",
      "Cambridge",
      "Te Awamutu",
      "Tokoroa"
    ],
    "Bay of Plenty": [
      "Tauranga",
      "Rotorua",
      "Whakatane",
      "Mount Maunganui"
    ]
  },

  "Switzerland": {
    "Zurich Canton": [
      "Zurich City",
      "Winterthur",
      "Uster",
      "Dübendorf",
      "Dietikon",
      "Wetzikon",
      "Horgen"
    ],
    "Geneva Canton": [
      "Geneva City",
      "Vernier",
      "Lancy",
      "Meyrin",
      "Carouge",
      "Onex",
      "Thônex"
    ],
    "Bern Canton": [
      "Bern City",
      "Biel/Bienne",
      "Thun",
      "Köniz",
      "Burgdorf",
      "Ostermundigen",
      "Interlaken"
    ],
    "Vaud": [
      "Lausanne",
      "Yverdon-les-Bains",
      "Montreux",
      "Renens",
      "Nyon",
      "Vevey",
      "Pully"
    ],
    "Basel-Stadt": [
      "Basel City",
      "Riehen",
      "Bettingen"
    ],
    "Lucerne Canton": [
      "Lucerne City",
      "Emmen",
      "Kriens",
      "Horw",
      "Ebikon"
    ]
  },

  "Sweden": {
    "Stockholm County": [
      "Stockholm City",
      "Södertälje",
      "Nacka",
      "Solna",
      "Sollentuna",
      "Täby",
      "Sundbyberg",
      "Huddinge"
    ],
    "Västra Götaland": [
      "Gothenburg",
      "Borås",
      "Trollhättan",
      "Skövde",
      "Uddevalla",
      "Mölndal",
      "Alingsås"
    ],
    "Skåne County": [
      "Malmö",
      "Helsingborg",
      "Lund",
      "Kristianstad",
      "Landskrona",
      "Trelleborg",
      "Ängelholm"
    ],
    "Uppsala County": [
      "Uppsala City",
      "Enköping",
      "Östhammar",
      "Tierp",
      "Knivsta"
    ],
    "Östergötland": [
      "Linköping",
      "Norrköping",
      "Motala",
      "Mjölby",
      "Finspång"
    ]
  },

  "Argentina": {
    "Buenos Aires Province": [
      "La Plata",
      "Mar del Plata",
      "Bahía Blanca",
      "Quilmes",
      "Lanús",
      "Tandil",
      "San Nicolás",
      "Pergamino"
    ],
    "Córdoba Province": [
      "Córdoba City",
      "Villa Carlos Paz",
      "Río Cuarto",
      "Villa María",
      "San Francisco",
      "Alta Gracia"
    ],
    "Santa Fe": [
      "Rosario",
      "Santa Fe City",
      "Rafaela",
      "Venado Tuerto",
      "Reconquista",
      "Santo Tomé"
    ],
    "Mendoza": [
      "Mendoza City",
      "Godoy Cruz",
      "Guaymallén",
      "San Rafael",
      "Maipú",
      "Luján de Cuyo"
    ],
    "Tucumán": [
      "San Miguel de Tucumán",
      "Banda del Río Salí",
      "Yerba Buena",
      "Concepción",
      "Tafí Viejo"
    ]
  },

  "Indonesia": {
    "Jakarta Special Capital Region": [
      "Central Jakarta",
      "South Jakarta",
      "West Jakarta",
      "East Jakarta",
      "North Jakarta",
      "Thousand Islands"
    ],
    "West Java": [
      "Bandung",
      "Bekasi",
      "Depok",
      "Bogor",
      "Cimahi",
      "Tasikmalaya",
      "Sukabumi",
      "Cirebon"
    ],
    "East Java": [
      "Surabaya",
      "Malang",
      "Sidoarjo",
      "Kediri",
      "Probolinggo",
      "Pasuruan",
      "Madiun",
      "Batu"
    ],
    "Bali": [
      "Denpasar",
      "Badung (Kuta/Seminyak)",
      "Gianyar (Ubud)",
      "Singaraja",
      "Tabanan",
      "Klungkung",
      "Karangasem"
    ],
    "Central Java": [
      "Semarang",
      "Surakarta (Solo)",
      "Magelang",
      "Salatiga",
      "Pekalongan",
      "Tegal"
    ],
    "Special Region of Yogyakarta": [
      "Yogyakarta City",
      "Sleman",
      "Bantul",
      "Gunungkidul",
      "Kulon Progo"
    ],
    "North Sumatra": [
      "Medan",
      "Binjai",
      "Pematangsiantar",
      "Tebing Tinggi",
      "Tanjungbalai"
    ]
  },

  "Saudi Arabia": {
    "Riyadh Province": [
      "Riyadh City",
      "Al Kharj",
      "Ad Diriyah",
      "Al Majma'ah",
      "Dawadmi",
      "Wadi ad-Dawasir",
      "Az Zulfi"
    ],
    "Makkah Province": [
      "Jeddah",
      "Mecca (Makkah)",
      "Taif",
      "Rabigh",
      "Al Qunfudhah",
      "Al Lith",
      "Khulais"
    ],
    "Eastern Province": [
      "Dammam",
      "Al Khobar",
      "Dhahran",
      "Jubail",
      "Al Ahsa (Hofuf)",
      "Qatif",
      "Hafar Al-Batin",
      "Ras Tanura"
    ],
    "Madinah Province": [
      "Medina (Madinah)",
      "Yanbu",
      "Al-'Ula",
      "Badr",
      "Mahd adh Dhahab"
    ],
    "Asir Province": [
      "Abha",
      "Khamis Mushait",
      "Bisha",
      "Ahad Rafidah"
    ],
    "Tabuk Province": [
      "Tabuk City",
      "Dubba",
      "Al Wajh",
      "Umluj",
      "Haqil"
    ]
  },

  "Malaysia": {
    "Federal Territories": [
      "Kuala Lumpur",
      "Putrajaya",
      "Labuan"
    ],
    "Selangor": [
      "Shah Alam",
      "Petaling Jaya",
      "Subang Jaya",
      "Klang",
      "Ampang Jaya",
      "Kajang",
      "Rawang",
      "Sepang (Cyberjaya)"
    ],
    "Penang": [
      "George Town",
      "Butterworth",
      "Bayan Lepas",
      "Bukit Mertajam",
      "Seberang Perai"
    ],
    "Johor": [
      "Johor Bahru",
      "Iskandar Puteri",
      "Batu Pahat",
      "Muar",
      "Kluang",
      "Kulai",
      "Segamat"
    ],
    "Perak": [
      "Ipoh",
      "Taiping",
      "Teluk Intan",
      "Batu Gajah",
      "Kuala Kangsar"
    ],
    "Sabah": [
      "Kota Kinabalu",
      "Sandakan",
      "Tawau",
      "Lahad Datu",
      "Keningau"
    ],
    "Sarawak": [
      "Kuching",
      "Miri",
      "Sibu",
      "Bintulu",
      "Samarahan"
    ],
    "Melaka": [
      "Malacca City",
      "Ayer Keroh",
      "Alor Gajah",
      "Jasin"
    ]
  },

  "Thailand": {
    "Bangkok Metropolitan": [
      "Phra Nakhon",
      "Pathum Wan",
      "Bang Rak",
      "Watthana (Sukhumvit)",
      "Chatuchak",
      "Khlong Toei",
      "Bang Na",
      "Dusit"
    ],
    "Chiang Mai Province": [
      "Mueang Chiang Mai",
      "Hang Dong",
      "San Sai",
      "Mae Rim",
      "San Kamphaeng"
    ],
    "Phuket Province": [
      "Phuket City",
      "Patong",
      "Kathu",
      "Karon",
      "Thalang",
      "Rawai"
    ],
    "Chonburi Province": [
      "Pattaya",
      "Mueang Chonburi",
      "Si Racha",
      "Bang Lamung",
      "Sattahip"
    ],
    "Surat Thani Province": [
      "Koh Samui",
      "Koh Phangan",
      "Surat Thani City",
      "Koh Tao",
      "Phunphin"
    ],
    "Krabi Province": [
      "Krabi Town",
      "Ao Nang",
      "Ko Lanta",
      "Ko Phi Phi",
      "Nuea Khlong"
    ]
  },

  "Vietnam": {
    "Hanoi (Municipality)": [
      "Ba Dinh",
      "Hoan Kiem",
      "Dong Da",
      "Hai Ba Trung",
      "Cau Giay",
      "Tay Ho",
      "Ha Dong"
    ],
    "Ho Chi Minh City": [
      "District 1",
      "District 3",
      "District 7",
      "Binh Thanh",
      "Thu Duc City",
      "Tan Binh",
      "Phu Nhuan"
    ],
    "Da Nang (Municipality)": [
      "Hai Chau",
      "Thanh Khe",
      "Son Tra",
      "Ngu Hanh Son",
      "Lien Chieu",
      "Cam Le"
    ],
    "Hai Phong (Municipality)": [
      "Hong Bang",
      "Ngo Quyen",
      "Le Chan",
      "Hai An",
      "Kien An"
    ],
    "Can Tho (Municipality)": [
      "Ninh Kieu",
      "Binh Thuy",
      "Cai Rang",
      "O Mon",
      "Thot Not"
    ],
    "Khanh Hoa": [
      "Nha Trang",
      "Cam Ranh",
      "Ninh Hoa",
      "Van Ninh"
    ],
    "Quang Nam": [
      "Hoi An",
      "Tam Ky",
      "Dien Ban",
      "Duy Xuyen"
    ]
  },

  "Philippines": {
    "National Capital Region (Metro Manila)": [
      "Manila City",
      "Quezon City",
      "Makati",
      "Taguig (BGC)",
      "Pasig",
      "Mandaluyong",
      "Parañaque",
      "Pasay",
      "Caloocan",
      "Muntinlupa"
    ],
    "Central Visayas (Cebu)": [
      "Cebu City",
      "Mandaue",
      "Lapu-Lapu",
      "Talisay",
      "Toledo",
      "Naga"
    ],
    "Davao Region": [
      "Davao City",
      "Tagum",
      "Panabo",
      "Digos",
      "Mati"
    ],
    "Calabarzon": [
      "Antipolo",
      "Calamba",
      "Bacoor",
      "Dasmariñas",
      "Santa Rosa",
      "Batangas City",
      "Lucena"
    ],
    "Central Luzon": [
      "Angeles City",
      "San Fernando (Pampanga)",
      "Olongapo",
      "Tarlac City",
      "Malolos",
      "Cabanatuan"
    ],
    "Western Visayas": [
      "Iloilo City",
      "Bacolod",
      "Roxas City",
      "Passi",
      "Sagay"
    ]
  },

  "Turkey": {
    "Istanbul Province": [
      "Kadiköy",
      "Besiktas",
      "Sisli",
      "Fatih (Historical Peninsula)",
      "Üsküdar",
      "Bakirköy",
      "Beyoglu (Taksim)",
      "Sariyer",
      "Maltepe",
      "Atasehir"
    ],
    "Ankara Province": [
      "Çankaya",
      "Keçiören",
      "Yenimahalle",
      "Mamak",
      "Etimesgut",
      "Sincan",
      "Altindag"
    ],
    "Izmir Province": [
      "Konak",
      "Karsiyaka",
      "Bornova",
      "Buca",
      "Çigli",
      "Çesme",
      "Urla"
    ],
    "Antalya Province": [
      "Muratpasa",
      "Kepez",
      "Konyaalti",
      "Alanya",
      "Manavgat",
      "Kemer",
      "Kas"
    ],
    "Bursa Province": [
      "Osmangazi",
      "Yildirim",
      "Nilüfer",
      "Inegöl",
      "Gemlik"
    ]
  },

  "Egypt": {
    "Cairo Governorate": [
      "Downtown Cairo",
      "Zamalek",
      "Maadi",
      "Nasr City",
      "Heliopolis",
      "New Cairo (Fifth Settlement)",
      "Shubra"
    ],
    "Alexandria Governorate": [
      "Montaza",
      "Sidi Gaber",
      "Al Raml",
      "Borg El Arab",
      "Al Attarin",
      "Mansheya"
    ],
    "Giza Governorate": [
      "Giza City",
      "6th of October City",
      "Sheikh Zayed City",
      "Dokki",
      "Agouza",
      "Al Haram"
    ],
    "Red Sea Governorate": [
      "Hurghada",
      "El Gouna",
      "Safaga",
      "Marsa Alam",
      "Qoseir"
    ],
    "South Sinai": [
      "Sharm El Sheikh",
      "Dahab",
      "Nuweiba",
      "Taba",
      "Saint Catherine"
    ],
    "Luxor Governorate": [
      "Luxor City",
      "Karnak",
      "Armant",
      "Esna"
    ]
  },

  "Nigeria": {
    "Lagos State": [
      "Ikeja",
      "Lagos Island",
      "Victoria Island",
      "Lekki",
      "Ikoyi",
      "Surulere",
      "Yaba",
      "Apapa",
      "Epe",
      "Ikorodu"
    ],
    "Federal Capital Territory": [
      "Abuja Municipal",
      "Garki",
      "Wuse",
      "Maitama",
      "Asokoro",
      "Gwarinpa",
      "Bwari",
      "Kuje"
    ],
    "Kano State": [
      "Kano City",
      "Fagge",
      "Dala",
      "Gwale",
      "Tarauni",
      "Nassarawa"
    ],
    "Rivers State": [
      "Port Harcourt",
      "Obio-Akpor",
      "Eleme",
      "Bonny",
      "Oyigbo"
    ],
    "Oyo State": [
      "Ibadan",
      "Ogbomosho",
      "Oyo Town",
      "Iseyin",
      "Saki"
    ]
  },

  "Kenya": {
    "Nairobi County": [
      "Nairobi Central",
      "Westlands",
      "Kilimani",
      "Karen",
      "Kasarani",
      "Langata",
      "Embakasi",
      "Runda"
    ],
    "Mombasa County": [
      "Mombasa Island",
      "Nyali",
      "Likoni",
      "Kisauni",
      "Changamwe",
      "Jomvu"
    ],
    "Kisumu County": [
      "Kisumu City",
      "Kisumu Central",
      "Kisumu East",
      "Kisumu West",
      "Muhoroni"
    ],
    "Nakuru County": [
      "Nakuru Town",
      "Naivasha",
      "Gilgil",
      "Molo",
      "Rongai"
    ],
    "Uasin Gishu County": [
      "Eldoret",
      "Turbo",
      "Soy",
      "Moiben",
      "Ainabkoi"
    ]
  },

  "Ireland": {
    "Leinster": [
      "Dublin",
      "Dún Laoghaire",
      "Drogheda",
      "Dundalk",
      "Bray",
      "Navan",
      "Kilkenny",
      "Swords"
    ],
    "Munster": [
      "Cork",
      "Limerick",
      "Waterford",
      "Ennis",
      "Tralee",
      "Killarney",
      "Clonmel"
    ],
    "Connacht": [
      "Galway",
      "Sligo",
      "Castlebar",
      "Ballina",
      "Roscommon"
    ],
    "Ulster (Republic)": [
      "Letterkenny",
      "Monaghan",
      "Cavan",
      "Buncrana"
    ]
  },

  "Portugal": {
    "Lisbon District": [
      "Lisbon City",
      "Sintra",
      "Cascais",
      "Loures",
      "Amadora",
      "Almada",
      "Oeiras"
    ],
    "Porto District": [
      "Porto City",
      "Vila Nova de Gaia",
      "Matosinhos",
      "Maia",
      "Gondomar",
      "Póvoa de Varzim"
    ],
    "Faro District (Algarve)": [
      "Faro City",
      "Portimão",
      "Lagos",
      "Albufeira",
      "Loulé",
      "Tavira"
    ],
    "Braga District": [
      "Braga City",
      "Guimarães",
      "Vila Nova de Famalicão",
      "Barcelos"
    ],
    "Coimbra District": [
      "Coimbra City",
      "Figueira da Foz",
      "Cantanhede",
      "Montemor-o-Velho"
    ]
  },

  "Greece": {
    "Attica": [
      "Athens",
      "Piraeus",
      "Peristeri",
      "Kallithea",
      "Glyfada",
      "Kifisia",
      "Marousi"
    ],
    "Central Macedonia": [
      "Thessaloniki",
      "Kalamaria",
      "Serres",
      "Katerini",
      "Veria",
      "Giannitsa"
    ],
    "Crete": [
      "Heraklion",
      "Chania",
      "Rethymno",
      "Agios Nikolaos",
      "Ierapetra"
    ],
    "Western Greece": [
      "Patras",
      "Agrinio",
      "Aigio",
      "Missolonghi",
      "Amaliada"
    ],
    "Thessaly": [
      "Larissa",
      "Volos",
      "Trikala",
      "Karditsa"
    ]
  },

  "Poland": {
    "Masovian": [
      "Warsaw",
      "Radom",
      "Plock",
      "Siedlce",
      "Pruszków",
      "Ostroleka"
    ],
    "Lesser Poland": [
      "Kraków",
      "Tarnów",
      "Nowy Sacz",
      "Oswiecim",
      "Zakopane"
    ],
    "Lower Silesian": [
      "Wroclaw",
      "Walbrzych",
      "Legnica",
      "Jelenia Góra",
      "Lubin"
    ],
    "Pomeranian": [
      "Gdansk",
      "Gdynia",
      "Sopot (Tricity)",
      "Slupsk",
      "Tczew"
    ],
    "Greater Poland": [
      "Poznan",
      "Kalisz",
      "Konin",
      "Pila",
      "Ostrów Wielkopolski"
    ],
    "Silesian": [
      "Katowice",
      "Czestochowa",
      "Sosnowiec",
      "Gliwice",
      "Zabrze",
      "Bielsko-Biala"
    ]
  },

  "Norway": {
    "Oslo": [
      "Oslo Sentrum",
      "Frogner",
      "Grünerløkka",
      "St. Hanshaugen",
      "Gamle Oslo",
      "Nordstrand"
    ],
    "Vestland": [
      "Bergen",
      "Åsane",
      "Fana",
      "Førde",
      "Voss",
      "Stord"
    ],
    "Trøndelag": [
      "Trondheim",
      "Steinkjer",
      "Stjørdal",
      "Levanger",
      "Namsos"
    ],
    "Rogaland": [
      "Stavanger",
      "Sandnes",
      "Haugesund",
      "Bryne",
      "Egersund"
    ],
    "Troms og Finnmark": [
      "Tromsø",
      "Harstad",
      "Alta",
      "Hammerfest"
    ]
  },

  "Denmark": {
    "Capital Region (Hovedstaden)": [
      "Copenhagen",
      "Frederiksberg",
      "Helsingør",
      "Hillerød",
      "Bornholm",
      "Ballerup"
    ],
    "Central Denmark (Midtjylland)": [
      "Aarhus",
      "Randers",
      "Horsens",
      "Silkeborg",
      "Herning",
      "Viborg"
    ],
    "Region of Southern Denmark": [
      "Odense",
      "Esbjerg",
      "Kolding",
      "Vejle",
      "Fredericia",
      "Sønderborg"
    ],
    "North Denmark (Nordjylland)": [
      "Aalborg",
      "Hjørring",
      "Frederikshavn",
      "Thisted"
    ],
    "Region Zealand (Sjælland)": [
      "Roskilde",
      "Næstved",
      "Slagelse",
      "Holbæk",
      "Køge"
    ]
  },

  "Finland": {
    "Uusimaa": [
      "Helsinki",
      "Espoo",
      "Vantaa",
      "Porvoo",
      "Hyvinkää",
      "Järvenpää"
    ],
    "Pirkanmaa": [
      "Tampere",
      "Nokia",
      "Ylöjärvi",
      "Kangasala",
      "Lempäälä"
    ],
    "Southwest Finland (Varsinais-Suomi)": [
      "Turku",
      "Kaarina",
      "Raisio",
      "Salo",
      "Naantali"
    ],
    "North Ostrobothnia": [
      "Oulu",
      "Raahe",
      "Kuusamo",
      "Ylivieska"
    ],
    "Central Finland": [
      "Jyväskylä",
      "Jämsä",
      "Äänekoski",
      "Keuruu"
    ]
  },

  "Belgium": {
    "Brussels-Capital Region": [
      "Brussels City",
      "Ixelles",
      "Schaerbeek",
      "Anderlecht",
      "Uccle",
      "Saint-Gilles"
    ],
    "Flemish Region (Antwerp)": [
      "Antwerp City",
      "Mechelen",
      "Turnhout",
      "Heist-op-den-Berg",
      "Brasschaat"
    ],
    "East Flanders": [
      "Ghent",
      "Aalst",
      "Sint-Niklaas",
      "Dendermonde",
      "Lokeren"
    ],
    "West Flanders": [
      "Bruges",
      "Kortrijk",
      "Ostend",
      "Roeselare",
      "Ypres"
    ],
    "Walloon Brabant": [
      "Wavre",
      "Waterloo",
      "Ottignies-Louvain-la-Neuve",
      "Braine-l'Alleud"
    ],
    "Liège Province": [
      "Liège City",
      "Verviers",
      "Seraing",
      "Herstal"
    ]
  },

  "Austria": {
    "Vienna": [
      "Innere Stadt (1st District)",
      "Leopoldstadt",
      "Landstrasse",
      "Neubau",
      "Favoriten",
      "Donaustadt"
    ],
    "Lower Austria": [
      "Sankt Pölten",
      "Wiener Neustadt",
      "Krems an der Donau",
      "Baden",
      "Amstetten"
    ],
    "Upper Austria": [
      "Linz",
      "Wels",
      "Steyr",
      "Traun",
      "Leonding"
    ],
    "Styria": [
      "Graz",
      "Leoben",
      "Kapfenberg",
      "Bruck an der Mur",
      "Feldbach"
    ],
    "Salzburg": [
      "Salzburg City",
      "Hallein",
      "Saalfelden",
      "Sankt Johann im Pongau",
      "Zell am See"
    ],
    "Tyrol": [
      "Innsbruck",
      "Kufstein",
      "Telfs",
      "Schwaz",
      "Hall in Tirol"
    ]
  },

  "Chile": {
    "Santiago Metropolitan": [
      "Santiago Centro",
      "Las Condes",
      "Providencia",
      "Vitacura",
      "Ñuñoa",
      "Maipú",
      "Puente Alto",
      "La Florida"
    ],
    "Valparaíso": [
      "Valparaíso City",
      "Viña del Mar",
      "Quilpué",
      "Villa Alemana",
      "San Antonio",
      "Quillota"
    ],
    "Biobío": [
      "Concepción",
      "Talcahuano",
      "San Pedro de la Paz",
      "Los Ángeles",
      "Coronel",
      "Chiguayante"
    ],
    "Antofagasta": [
      "Antofagasta City",
      "Calama",
      "Tocopilla",
      "Mejillones"
    ],
    "Araucanía": [
      "Temuco",
      "Padre Las Casas",
      "Villarrica",
      "Pucón",
      "Angol"
    ]
  },

  "Colombia": {
    "Bogotá Capital District": [
      "Chapinero",
      "Usaquén",
      "Suba",
      "Teusaquillo",
      "Santa Fe",
      "Fontibón",
      "Engativá",
      "Kennedy"
    ],
    "Antioquia": [
      "Medellín",
      "Bello",
      "Itagüí",
      "Envigado",
      "Rionegro",
      "Sabaneta",
      "Apartadó"
    ],
    "Valle del Cauca": [
      "Cali",
      "Buenaventura",
      "Palmira",
      "Tuluá",
      "Cartago",
      "Buga",
      "Jamundí"
    ],
    "Atlántico": [
      "Barranquilla",
      "Soledad",
      "Malambo",
      "Sabanalarga",
      "Puerto Colombia"
    ],
    "Santander": [
      "Bucaramanga",
      "Floridablanca",
      "Girón",
      "Piedecuesta",
      "Barrancabermeja"
    ],
    "Bolívar": [
      "Cartagena",
      "Magangué",
      "Carmen de Bolívar",
      "Turbaco"
    ]
  },

  "Peru": {
    "Lima Province": [
      "Miraflores",
      "San Isidro",
      "Barranco",
      "Santiago de Surco",
      "Lima Cercado",
      "La Molina",
      "San Borja",
      "Callao"
    ],
    "Arequipa": [
      "Arequipa City",
      "Cayma",
      "Yanahuara",
      "Cerro Colorado",
      "Paucarpata",
      "Bustamante y Rivero"
    ],
    "Cusco": [
      "Cusco Historic Center",
      "Wanchaq",
      "Santiago",
      "San Sebastian",
      "San Jeronimo",
      "Urubamba (Sacred Valley)"
    ],
    "La Libertad": [
      "Trujillo",
      "Huanchaco",
      "Victor Larco Herrera",
      "Chepen",
      "Pacasmayo"
    ],
    "Piura": [
      "Piura City",
      "Sullana",
      "Talara",
      "Paita",
      "Catacaos"
    ]
  },

  "Pakistan": {
    "Punjab": [
      "Lahore",
      "Faisalabad",
      "Rawalpindi",
      "Gujranwala",
      "Multan",
      "Sialkot",
      "Bahawalpur",
      "Sargodha",
      "Sheikhupura",
      "Gujarat"
    ],
    "Sindh": [
      "Karachi",
      "Hyderabad",
      "Sukkur",
      "Larkana",
      "Nawabshah",
      "Mirpur Khas"
    ],
    "Khyber Pakhtunkhwa": [
      "Peshawar",
      "Mardan",
      "Abbottabad",
      "Swat (Mingora)",
      "Kohat",
      "Dera Ismail Khan"
    ],
    "Islamabad Capital Territory": [
      "Islamabad F-Sectors",
      "Islamabad G-Sectors",
      "Islamabad E-Sectors",
      "Blue Area",
      "Bahria Town Islamabad",
      "DHA Islamabad"
    ],
    "Balochistan": [
      "Quetta",
      "Gwadar",
      "Turbat",
      "Khuzdar",
      "Chaman",
      "Sibi"
    ]
  },

  "Bangladesh": {
    "Dhaka Division": [
      "Dhaka North",
      "Dhaka South",
      "Gazipur",
      "Narayanganj",
      "Tangail",
      "Faridpur",
      "Gopalganj"
    ],
    "Chittagong Division": [
      "Chittagong (Chattogram)",
      "Cox's Bazar",
      "Comilla",
      "Brahmanbaria",
      "Noakhali",
      "Feni",
      "Rangamati"
    ],
    "Sylhet Division": [
      "Sylhet City",
      "Moulvibazar",
      "Habiganj",
      "Sunamganj",
      "Sreemangal"
    ],
    "Rajshahi Division": [
      "Rajshahi City",
      "Bogra (Bogura)",
      "Pabna",
      "Naogaon",
      "Sirajganj"
    ],
    "Khulna Division": [
      "Khulna City",
      "Jessore",
      "Kushtia",
      "Satkhira",
      "Bagerhat"
    ]
  },

  "Sri Lanka": {
    "Western Province": [
      "Colombo",
      "Sri Jayawardenepura Kotte",
      "Dehiwala-Mount Lavinia",
      "Negombo",
      "Gampaha",
      "Kalutara",
      "Moratuwa"
    ],
    "Central Province": [
      "Kandy",
      "Nuwara Eliya",
      "Matale",
      "Gampola",
      "Hatton"
    ],
    "Southern Province": [
      "Galle",
      "Matara",
      "Hambantota",
      "Mirissa",
      "Unawatuna",
      "Tangalle"
    ],
    "Northern Province": [
      "Jaffna",
      "Kilinochchi",
      "Vavuniya",
      "Mannar",
      "Point Pedro"
    ],
    "North Western Province": [
      "Kurunegala",
      "Chilaw",
      "Puttalam",
      "Kuliyapitiya"
    ]
  },

  "Nepal": {
    "Bagmati Province": [
      "Kathmandu",
      "Lalitpur (Patan)",
      "Bhaktapur",
      "Hetauda",
      "Bharatpur (Chitwan)",
      "Dhulikhel"
    ],
    "Gandaki Province": [
      "Pokhara",
      "Baglung",
      "Gorkha",
      "Besisahar",
      "Damauli"
    ],
    "Koshi Province": [
      "Biratnagar",
      "Dharan",
      "Itahari",
      "Damak",
      "Bhadrapur"
    ],
    "Lumbini Province": [
      "Butwal",
      "Bhairahawa (Siddharthanagar)",
      "Nepalgunj",
      "Tansen",
      "Lumbini Sanskritik"
    ],
    "Madhesh Province": [
      "Janakpur",
      "Birgunj",
      "Kalaiya",
      "Jaleshwar",
      "Rajbiraj"
    ]
  },

  "Qatar": {
    "Doha Municipality": [
      "West Bay",
      "The Pearl-Qatar",
      "Al Dafna",
      "Souq Waqif Area",
      "Mushaireb Downtown",
      "Al Sadd",
      "Old Airport"
    ],
    "Al Rayyan": [
      "Education City",
      "Al Waab",
      "Aspire Zone",
      "Al Gharrafa",
      "Muaither",
      "Abu Hamour"
    ],
    "Al Wakrah": [
      "Al Wakrah City",
      "Al Wukair",
      "Mesaieed"
    ],
    "Al Daayen": [
      "Lusail City",
      "Lusail Marina",
      "Fox Hills",
      "Al Egla"
    ],
    "Al Khor": [
      "Al Khor City",
      "Ras Laffan Industrial City",
      "Al Thakhira"
    ]
  },

  "Oman": {
    "Muscat Governorate": [
      "Ruwi",
      "Muttrah",
      "Al Qurum",
      "Al Khuwair",
      "Seeb",
      "Al Mouj",
      "Bawshar",
      "Al Amerat"
    ],
    "Dhofar Governorate": [
      "Salalah",
      "Taqah",
      "Mirbat",
      "Thumrait"
    ],
    "Al Batinah North": [
      "Sohar",
      "Shinas",
      "Liwa",
      "Saham",
      "Al Khaburah"
    ],
    "Ad Dakhiliyah": [
      "Nizwa",
      "Bahla",
      "Izki",
      "Samail",
      "Bidbid"
    ]
  }
};
