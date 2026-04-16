export interface VocabWord {
  id: string;
  word: string;
  type: "noun" | "verb" | "adjective" | "adverb" | "phrase" | "expression";
  meaningEn: string;
  meaningAr: string;
  example: string;
  image: string;
  category: string;
}

// Use Loremflickr keyword search — always returns a real photo matching the keyword.
// Reliable, free, no API key required, and always returns 200.
const img = (keyword: string, seed?: string) => {
  const kw = encodeURIComponent(keyword.trim().toLowerCase());
  const s = encodeURIComponent(seed || keyword);
  return `https://loremflickr.com/400/300/${kw}?lock=${hashCode(s)}`;
};

// Simple deterministic hash so each word always gets the same image
function hashCode(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) - h) + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h) % 1000;
}

export const vocabulary: VocabWord[] = [
  // ============================================================
  // UNIT 7 — It's a Good Deal, Isn't It?
  // ============================================================
  { id: "u7-antique", word: "antique", type: "noun", meaningEn: "A collectible old item of value", meaningAr: "قطعة أثرية / تحفة قديمة", example: "She found a beautiful antique at the garage sale.", image: img("antique vintage"), category: "7 - It's a Good Deal" },
  { id: "u7-broom", word: "broom", type: "noun", meaningEn: "A brush with a long handle for sweeping", meaningAr: "مكنسة يدوية", example: "She swept the floor with a broom.", image: img("broom sweep"), category: "7 - It's a Good Deal" },
  { id: "u7-cup", word: "cup", type: "noun", meaningEn: "A small container for drinking", meaningAr: "كوب / فنجان", example: "Would you like a cup of tea?", image: img("tea cup"), category: "7 - It's a Good Deal" },
  { id: "u7-fan", word: "fan", type: "noun", meaningEn: "A device that moves air to cool", meaningAr: "مروحة", example: "Turn on the fan, it's hot today.", image: img("electric fan"), category: "7 - It's a Good Deal" },
  { id: "u7-fork", word: "fork", type: "noun", meaningEn: "An eating utensil with prongs", meaningAr: "شوكة", example: "Use your fork to eat the salad.", image: img("fork cutlery"), category: "7 - It's a Good Deal" },
  { id: "u7-frying-pan", word: "frying pan", type: "noun", meaningEn: "A flat pan for cooking food in oil", meaningAr: "مقلاة", example: "Cook the eggs in a frying pan.", image: img("frying pan"), category: "7 - It's a Good Deal" },
  { id: "u7-garage-sale", word: "garage sale", type: "noun", meaningEn: "A sale of used items from a home", meaningAr: "بيع أغراض مستعملة في المرآب", example: "We found great deals at the garage sale.", image: img("garage sale yard"), category: "7 - It's a Good Deal" },
  { id: "u7-garbage-can", word: "garbage can", type: "noun", meaningEn: "A container for waste", meaningAr: "سلة المهملات", example: "Throw it in the garbage can.", image: img("trash can"), category: "7 - It's a Good Deal" },
  { id: "u7-grass", word: "grass", type: "noun", meaningEn: "Green plants covering the ground", meaningAr: "عشب", example: "The kids played on the green grass.", image: img("green grass"), category: "7 - It's a Good Deal" },
  { id: "u7-hammer", word: "hammer", type: "noun", meaningEn: "A tool used for hitting nails", meaningAr: "مطرقة", example: "He used a hammer to hang the picture.", image: img("hammer tool"), category: "7 - It's a Good Deal" },
  { id: "u7-hose", word: "hose", type: "noun", meaningEn: "A flexible tube for water", meaningAr: "خرطوم", example: "He watered the garden with a hose.", image: img("garden hose"), category: "7 - It's a Good Deal" },
  { id: "u7-knife", word: "knife / knives", type: "noun", meaningEn: "A sharp blade used for cutting", meaningAr: "سكين / سكاكين", example: "Be careful with that sharp knife.", image: img("kitchen knife"), category: "7 - It's a Good Deal" },
  { id: "u7-ladder", word: "ladder", type: "noun", meaningEn: "A structure for climbing up or down", meaningAr: "سُلّم", example: "He climbed the ladder to fix the roof.", image: img("ladder"), category: "7 - It's a Good Deal" },
  { id: "u7-lamp", word: "lamp", type: "noun", meaningEn: "A device that gives light", meaningAr: "مصباح", example: "She turned on the lamp to read.", image: img("table lamp"), category: "7 - It's a Good Deal" },
  { id: "u7-lawn-mower", word: "lawn mower", type: "noun", meaningEn: "A machine for cutting grass", meaningAr: "جزّازة عشب", example: "Dad uses the lawn mower every weekend.", image: img("lawn mower"), category: "7 - It's a Good Deal" },
  { id: "u7-luggage", word: "luggage", type: "noun", meaningEn: "Bags and suitcases for traveling", meaningAr: "أمتعة سفر", example: "Don't forget your luggage at the airport.", image: img("luggage suitcase"), category: "7 - It's a Good Deal" },
  { id: "u7-plate", word: "plate", type: "noun", meaningEn: "A flat dish for serving food", meaningAr: "طبق", example: "Put the food on your plate.", image: img("dinner plate"), category: "7 - It's a Good Deal" },
  { id: "u7-pliers", word: "pliers", type: "noun", meaningEn: "A tool for gripping and bending", meaningAr: "كماشة / زرّادية", example: "Use pliers to pull out the old nail.", image: img("pliers tool"), category: "7 - It's a Good Deal" },
  { id: "u7-pot", word: "pot", type: "noun", meaningEn: "A deep container for cooking", meaningAr: "قِدر", example: "Boil the water in a big pot.", image: img("cooking pot"), category: "7 - It's a Good Deal" },
  { id: "u7-rocking-chair", word: "rocking chair", type: "noun", meaningEn: "A chair that moves back and forth", meaningAr: "كرسي هزّاز", example: "Grandma loves sitting in her rocking chair.", image: img("rocking chair"), category: "7 - It's a Good Deal" },
  { id: "u7-saucer", word: "saucer", type: "noun", meaningEn: "A small plate placed under a cup", meaningAr: "صحن الفنجان", example: "Place the cup on the saucer.", image: img("saucer cup"), category: "7 - It's a Good Deal" },
  { id: "u7-saw", word: "saw", type: "noun", meaningEn: "A tool for cutting wood", meaningAr: "منشار", example: "He cut the wood with a saw.", image: img("saw tool"), category: "7 - It's a Good Deal" },
  { id: "u7-screwdriver", word: "screwdriver", type: "noun", meaningEn: "A tool for turning screws", meaningAr: "مفك براغي", example: "I need a screwdriver to fix this.", image: img("screwdriver tool"), category: "7 - It's a Good Deal" },
  { id: "u7-spoon", word: "spoon", type: "noun", meaningEn: "An eating utensil with a rounded bowl", meaningAr: "ملعقة", example: "Stir the soup with a spoon.", image: img("spoon utensil"), category: "7 - It's a Good Deal" },
  { id: "u7-teapot", word: "teapot", type: "noun", meaningEn: "A pot for brewing and pouring tea", meaningAr: "إبريق شاي", example: "She poured tea from the teapot.", image: img("teapot"), category: "7 - It's a Good Deal" },
  { id: "u7-teddy-bear", word: "teddy bear", type: "noun", meaningEn: "A soft stuffed toy bear", meaningAr: "دبدوب", example: "The child sleeps with her teddy bear.", image: img("teddy bear"), category: "7 - It's a Good Deal" },
  { id: "u7-vacuum-cleaner", word: "vacuum cleaner", type: "noun", meaningEn: "A machine that sucks up dirt", meaningAr: "مكنسة كهربائية", example: "I vacuum the carpet with the vacuum cleaner.", image: img("vacuum cleaner"), category: "7 - It's a Good Deal" },
  { id: "u7-guess", word: "guess", type: "verb", meaningEn: "To estimate without certain knowledge", meaningAr: "يُخمّن", example: "Can you guess the answer?", image: img("thinking question"), category: "7 - It's a Good Deal" },
  { id: "u7-run-on", word: "run on", type: "verb", meaningEn: "To operate using a power source", meaningAr: "يعمل بـ / يشتغل على", example: "This car runs on electricity.", image: img("electric car charging"), category: "7 - It's a Good Deal" },
  { id: "u7-be-able-to", word: "be able to", type: "verb", meaningEn: "To have the ability to do something", meaningAr: "يكون قادراً على", example: "She will be able to come tomorrow.", image: img("success thumbs up"), category: "7 - It's a Good Deal" },
  { id: "u7-from-around-here", word: "from around here", type: "expression", meaningEn: "From this area or neighborhood", meaningAr: "من هذه المنطقة", example: "Are you from around here?", image: img("neighborhood street"), category: "7 - It's a Good Deal" },
  { id: "u7-i-dont-think-so", word: "I don't think so.", type: "expression", meaningEn: "I disagree or doubt it", meaningAr: "لا أعتقد ذلك", example: "Will it rain? I don't think so.", image: img("no shaking head"), category: "7 - It's a Good Deal" },
  { id: "u7-how-do-you-do", word: "How do you do?", type: "expression", meaningEn: "A formal greeting", meaningAr: "كيف حالك؟ (تحية رسمية)", example: "How do you do? Nice to meet you.", image: img("handshake greeting"), category: "7 - It's a Good Deal" },
  { id: "u7-ill-be-happy-to", word: "I'll be happy to…", type: "expression", meaningEn: "Willing to do something gladly", meaningAr: "سأكون سعيداً بأن…", example: "I'll be happy to help you move.", image: img("happy helping"), category: "7 - It's a Good Deal" },
  { id: "u7-is-that-so", word: "Is that so?", type: "expression", meaningEn: "Really? Is that true?", meaningAr: "هل هذا صحيح؟", example: "You won the lottery? Is that so?", image: img("surprised face"), category: "7 - It's a Good Deal" },
  { id: "u7-show-around", word: "show someone around", type: "expression", meaningEn: "To give someone a tour of a place", meaningAr: "يأخذ شخصاً في جولة", example: "Let me show you around the office.", image: img("tour guide"), category: "7 - It's a Good Deal" },

  // ============================================================
  // UNIT 8 — Drive Slowly!
  // ============================================================
  { id: "u8-automatic-transmission", word: "automatic transmission", type: "noun", meaningEn: "A gear system that shifts on its own", meaningAr: "ناقل حركة أوتوماتيكي", example: "Most new cars have automatic transmission.", image: img("car gear shift"), category: "8 - Drive Slowly!" },
  { id: "u8-brake-pedal", word: "brake pedal", type: "noun", meaningEn: "Pedal pressed to slow or stop a car", meaningAr: "دواسة الفرامل", example: "Press the brake pedal slowly.", image: img("car brake pedal"), category: "8 - Drive Slowly!" },
  { id: "u8-bumper", word: "bumper", type: "noun", meaningEn: "Bar at the front/back of a car for protection", meaningAr: "صادم / مصدّ السيارة", example: "The bumper protects the car in small accidents.", image: img("car bumper"), category: "8 - Drive Slowly!" },
  { id: "u8-dashboard", word: "dashboard", type: "noun", meaningEn: "Panel with controls in front of the driver", meaningAr: "لوحة القيادة", example: "The fuel light on the dashboard is on.", image: img("car dashboard"), category: "8 - Drive Slowly!" },
  { id: "u8-exterior", word: "exterior", type: "noun", meaningEn: "The outside of something", meaningAr: "الجزء الخارجي", example: "The car's exterior is bright red.", image: img("car exterior red"), category: "8 - Drive Slowly!" },
  { id: "u8-gas-pedal", word: "gas pedal", type: "noun", meaningEn: "Pedal pressed to make the car go faster", meaningAr: "دواسة الوقود", example: "He pressed the gas pedal to speed up.", image: img("car pedal"), category: "8 - Drive Slowly!" },
  { id: "u8-gas-tank", word: "gas tank", type: "noun", meaningEn: "Container that holds fuel in a car", meaningAr: "خزان الوقود", example: "The gas tank is almost empty.", image: img("gas pump fuel"), category: "8 - Drive Slowly!" },
  { id: "u8-glove-compartment", word: "glove compartment", type: "noun", meaningEn: "Small storage area in front of the passenger seat", meaningAr: "صندوق القفازات / درج الأمامي", example: "The map is in the glove compartment.", image: img("car glove compartment"), category: "8 - Drive Slowly!" },
  { id: "u8-gps", word: "GPS", type: "noun", meaningEn: "Device that gives directions using satellites", meaningAr: "جهاز تحديد المواقع", example: "Use the GPS to find the address.", image: img("gps navigation car"), category: "8 - Drive Slowly!" },
  { id: "u8-headlight", word: "headlight", type: "noun", meaningEn: "Front light on a vehicle", meaningAr: "المصباح الأمامي", example: "Turn on your headlights at night.", image: img("car headlight"), category: "8 - Drive Slowly!" },
  { id: "u8-highway", word: "highway", type: "noun", meaningEn: "A main public road for fast travel", meaningAr: "طريق سريع", example: "We drove fast on the highway.", image: img("highway road"), category: "8 - Drive Slowly!" },
  { id: "u8-hood", word: "hood", type: "noun", meaningEn: "Cover over a car's engine", meaningAr: "غطاء محرك السيارة", example: "He opened the hood to check the engine.", image: img("car hood engine open"), category: "8 - Drive Slowly!" },
  { id: "u8-ignition", word: "ignition", type: "noun", meaningEn: "Switch that starts the car engine", meaningAr: "مفتاح تشغيل السيارة", example: "Put the key in the ignition.", image: img("car key ignition"), category: "8 - Drive Slowly!" },
  { id: "u8-interior", word: "interior", type: "noun", meaningEn: "The inside of something", meaningAr: "الجزء الداخلي", example: "The car has a leather interior.", image: img("car interior leather"), category: "8 - Drive Slowly!" },
  { id: "u8-pedestrian", word: "pedestrian", type: "noun", meaningEn: "A person walking on a street", meaningAr: "أحد المشاة", example: "Always watch for pedestrians.", image: img("pedestrian crossing"), category: "8 - Drive Slowly!" },
  { id: "u8-rearview-mirror", word: "rearview mirror", type: "noun", meaningEn: "Mirror used to see behind the car", meaningAr: "مرآة الرؤية الخلفية", example: "Check the rearview mirror before turning.", image: img("rearview mirror car"), category: "8 - Drive Slowly!" },
  { id: "u8-road-sign", word: "road sign", type: "noun", meaningEn: "A sign that gives information to drivers", meaningAr: "إشارة طريق", example: "Obey every road sign.", image: img("road sign"), category: "8 - Drive Slowly!" },
  { id: "u8-seat-belt", word: "seat belt", type: "noun", meaningEn: "A safety strap worn in vehicles", meaningAr: "حزام الأمان", example: "Always wear your seat belt.", image: img("seat belt car safety"), category: "8 - Drive Slowly!" },
  { id: "u8-signal-light", word: "signal light", type: "noun", meaningEn: "Light used to show direction of turn", meaningAr: "إشارة الانعطاف", example: "Use the signal light before turning.", image: img("car turn signal"), category: "8 - Drive Slowly!" },
  { id: "u8-speed-limit", word: "speed limit", type: "noun", meaningEn: "Maximum legal driving speed", meaningAr: "السرعة القصوى المسموحة", example: "The speed limit here is 60.", image: img("speed limit sign"), category: "8 - Drive Slowly!" },
  { id: "u8-steering-wheel", word: "steering wheel", type: "noun", meaningEn: "Wheel used to steer a vehicle", meaningAr: "عجلة القيادة", example: "Keep both hands on the steering wheel.", image: img("steering wheel car"), category: "8 - Drive Slowly!" },
  { id: "u8-ticket", word: "ticket", type: "noun", meaningEn: "Official notice of a traffic offense", meaningAr: "مخالفة مرورية", example: "He got a ticket for speeding.", image: img("traffic ticket police"), category: "8 - Drive Slowly!" },
  { id: "u8-trunk", word: "trunk", type: "noun", meaningEn: "Storage space at the back of a car", meaningAr: "صندوق السيارة الخلفي", example: "Put the bags in the trunk.", image: img("car trunk open"), category: "8 - Drive Slowly!" },
  { id: "u8-windshield", word: "windshield", type: "noun", meaningEn: "Front window of a vehicle", meaningAr: "الزجاج الأمامي للسيارة", example: "A rock cracked the windshield.", image: img("car windshield"), category: "8 - Drive Slowly!" },
  { id: "u8-windshield-wipers", word: "windshield wipers", type: "noun", meaningEn: "Blades that clean the windshield", meaningAr: "ماسحات الزجاج", example: "Turn on the windshield wipers in the rain.", image: img("windshield wipers rain"), category: "8 - Drive Slowly!" },
  { id: "u8-obey", word: "obey", type: "verb", meaningEn: "To follow rules or commands", meaningAr: "يُطيع", example: "Obey the traffic laws.", image: img("stop sign traffic"), category: "8 - Drive Slowly!" },
  { id: "u8-pass", word: "pass", type: "verb", meaningEn: "To move past something", meaningAr: "يتجاوز", example: "Don't pass the car on this road.", image: img("car overtaking"), category: "8 - Drive Slowly!" },
  { id: "u8-speed", word: "speed", type: "verb", meaningEn: "To drive faster than the legal limit", meaningAr: "يُسرع", example: "Don't speed in the city.", image: img("fast car speeding"), category: "8 - Drive Slowly!" },
  { id: "u8-watch-out", word: "watch out", type: "verb", meaningEn: "Be careful; pay attention", meaningAr: "انتبه / احذر", example: "Watch out for that car!", image: img("warning caution"), category: "8 - Drive Slowly!" },
  { id: "u8-carefully", word: "carefully", type: "adverb", meaningEn: "In a cautious way", meaningAr: "بحذر", example: "Drive carefully in the rain.", image: img("careful driving"), category: "8 - Drive Slowly!" },
  { id: "u8-slowly", word: "slowly", type: "adverb", meaningEn: "At a low speed", meaningAr: "ببطء", example: "Walk slowly across the street.", image: img("slow sign turtle"), category: "8 - Drive Slowly!" },
  { id: "u8-well", word: "well", type: "adverb", meaningEn: "In a good or skilled way", meaningAr: "بشكل جيد", example: "She drives very well.", image: img("thumbs up driving"), category: "8 - Drive Slowly!" },
  { id: "u8-in-a-hurry", word: "in a hurry", type: "expression", meaningEn: "Doing something quickly because there's little time", meaningAr: "في عجلة من أمره", example: "Sorry, I'm in a hurry.", image: img("running late hurry"), category: "8 - Drive Slowly!" },
  { id: "u8-run-into-traffic", word: "run into traffic", type: "expression", meaningEn: "To suddenly get stuck in traffic", meaningAr: "يقع في زحام مروري", example: "We ran into traffic on the way home.", image: img("traffic jam cars"), category: "8 - Drive Slowly!" },
  { id: "u8-hey", word: "Hey!", type: "expression", meaningEn: "Used to get someone's attention", meaningAr: "مهلاً! / يا!", example: "Hey! Watch where you're going.", image: img("shouting attention"), category: "8 - Drive Slowly!" },
  { id: "u8-im-doing-60", word: "I'm doing 60.", type: "expression", meaningEn: "I'm driving at 60 mph/kph", meaningAr: "أنا أسير بسرعة 60", example: "Don't worry, I'm doing 60.", image: img("speedometer car"), category: "8 - Drive Slowly!" },
  { id: "u8-cant-be-serious", word: "You can't be serious!", type: "expression", meaningEn: "You must be joking", meaningAr: "لا يمكن أن تكون جاداً!", example: "Pay $500? You can't be serious!", image: img("shocked surprised face"), category: "8 - Drive Slowly!" },

  // ============================================================
  // UNIT 9 — All Kinds of People
  // ============================================================
  { id: "u9-airline", word: "airline", type: "noun", meaningEn: "A company that flies passengers", meaningAr: "شركة طيران", example: "Which airline are you flying with?", image: img("airplane airline"), category: "9 - All Kinds of People" },
  { id: "u9-attraction", word: "attraction", type: "noun", meaningEn: "A place people visit for fun", meaningAr: "معلم سياحي / جذب", example: "The museum is a popular attraction.", image: img("tourist attraction landmark"), category: "9 - All Kinds of People" },
  { id: "u9-editor", word: "editor", type: "noun", meaningEn: "A person who edits text or media", meaningAr: "محرّر", example: "The editor checked the article.", image: img("editor desk computer"), category: "9 - All Kinds of People" },
  { id: "u9-event", word: "event", type: "noun", meaningEn: "A planned occasion or activity", meaningAr: "مناسبة / حدث", example: "The wedding was a beautiful event.", image: img("party event celebration"), category: "9 - All Kinds of People" },
  { id: "u9-fake", word: "fake", type: "adjective", meaningEn: "Not real or genuine", meaningAr: "مزيّف", example: "This watch is fake.", image: img("fake counterfeit"), category: "9 - All Kinds of People" },
  { id: "u9-flyers", word: "flyers", type: "noun", meaningEn: "Small printed advertisements", meaningAr: "منشورات إعلانية", example: "He handed out flyers in the street.", image: img("flyers leaflets"), category: "9 - All Kinds of People" },
  { id: "u9-pedal-cab", word: "pedal cab", type: "noun", meaningEn: "A small taxi powered by pedaling", meaningAr: "عربة تاكسي بدوّاسات", example: "We took a pedal cab through the park.", image: img("pedicab rickshaw"), category: "9 - All Kinds of People" },
  { id: "u9-thief", word: "thief", type: "noun", meaningEn: "A person who steals", meaningAr: "لص / سارق", example: "The thief ran away with the bag.", image: img("thief masked"), category: "9 - All Kinds of People" },
  { id: "u9-compliment", word: "compliment", type: "verb", meaningEn: "To say something nice about someone", meaningAr: "يُجامل / يُثني على", example: "She complimented my new dress.", image: img("compliment smile"), category: "9 - All Kinds of People" },
  { id: "u9-grab", word: "grab", type: "verb", meaningEn: "To take quickly with your hand", meaningAr: "يخطف / يمسك بسرعة", example: "He grabbed his bag and ran.", image: img("grab hand reach"), category: "9 - All Kinds of People" },
  { id: "u9-recognize", word: "recognize", type: "verb", meaningEn: "To know someone or something you've seen before", meaningAr: "يتعرّف على", example: "I didn't recognize you with your new haircut.", image: img("recognize face"), category: "9 - All Kinds of People" },
  { id: "u9-spill", word: "spill", type: "verb", meaningEn: "To accidentally pour out a liquid", meaningAr: "يسكب / يُريق", example: "Don't spill the milk!", image: img("spilled coffee"), category: "9 - All Kinds of People" },
  { id: "u9-steal", word: "steal", type: "verb", meaningEn: "To take something that isn't yours", meaningAr: "يسرق", example: "Someone tried to steal my phone.", image: img("theft stealing"), category: "9 - All Kinds of People" },
  { id: "u9-absentminded", word: "absentminded", type: "adjective", meaningEn: "Forgetful; not paying attention", meaningAr: "شارد الذهن", example: "My grandpa is a bit absentminded.", image: img("forgetful confused"), category: "9 - All Kinds of People" },
  { id: "u9-athletic", word: "athletic", type: "adjective", meaningEn: "Good at sports; physically strong", meaningAr: "رياضي البنية", example: "She's very athletic and runs every day.", image: img("athlete running fit"), category: "9 - All Kinds of People" },
  { id: "u9-clever", word: "clever", type: "adjective", meaningEn: "Quick to learn; smart", meaningAr: "ذكي / فطن", example: "What a clever idea!", image: img("clever idea lightbulb"), category: "9 - All Kinds of People" },
  { id: "u9-efficient", word: "efficient", type: "adjective", meaningEn: "Working well without waste", meaningAr: "فعّال / كفؤ", example: "She's a very efficient worker.", image: img("efficient working office"), category: "9 - All Kinds of People" },
  { id: "u9-generous", word: "generous", type: "adjective", meaningEn: "Willing to give freely", meaningAr: "كريم / سخي", example: "He's generous with his money.", image: img("giving charity"), category: "9 - All Kinds of People" },
  { id: "u9-hardworking", word: "hardworking", type: "adjective", meaningEn: "Working with great effort", meaningAr: "مجتهد", example: "She's a hardworking student.", image: img("hard working office"), category: "9 - All Kinds of People" },
  { id: "u9-honest", word: "honest", type: "adjective", meaningEn: "Truthful and trustworthy", meaningAr: "صادق", example: "I appreciate your honest answer.", image: img("honest trustworthy"), category: "9 - All Kinds of People" },
  { id: "u9-kind", word: "kind", type: "adjective", meaningEn: "Caring and helpful to others", meaningAr: "لطيف / طيّب", example: "She's so kind to everyone.", image: img("kindness helping"), category: "9 - All Kinds of People" },
  { id: "u9-lazy", word: "lazy", type: "adjective", meaningEn: "Not wanting to work or be active", meaningAr: "كسول", example: "Don't be lazy! Get up and help.", image: img("lazy sleeping couch"), category: "9 - All Kinds of People" },
  { id: "u9-optimistic", word: "optimistic", type: "adjective", meaningEn: "Expecting good things to happen", meaningAr: "متفائل", example: "She's optimistic about the future.", image: img("optimistic happy sun"), category: "9 - All Kinds of People" },
  { id: "u9-patient", word: "patient", type: "adjective", meaningEn: "Able to wait calmly", meaningAr: "صبور", example: "Be patient; the train is coming.", image: img("patient waiting"), category: "9 - All Kinds of People" },
  { id: "u9-persuasive", word: "persuasive", type: "adjective", meaningEn: "Able to convince others", meaningAr: "مُقنع", example: "He's a very persuasive speaker.", image: img("speaker presentation"), category: "9 - All Kinds of People" },
  { id: "u9-pessimistic", word: "pessimistic", type: "adjective", meaningEn: "Expecting bad things to happen", meaningAr: "متشائم", example: "Don't be so pessimistic about the trip.", image: img("sad rain gloomy"), category: "9 - All Kinds of People" },
  { id: "u9-polite", word: "polite", type: "adjective", meaningEn: "Showing good manners", meaningAr: "مؤدب", example: "Always be polite to others.", image: img("polite greeting"), category: "9 - All Kinds of People" },
  { id: "u9-quiet", word: "quiet", type: "adjective", meaningEn: "Not making much noise", meaningAr: "هادئ", example: "Please be quiet in the library.", image: img("quiet library silence"), category: "9 - All Kinds of People" },
  { id: "u9-reliable", word: "reliable", type: "adjective", meaningEn: "Can be trusted; dependable", meaningAr: "موثوق", example: "He's a reliable friend.", image: img("reliable handshake"), category: "9 - All Kinds of People" },
  { id: "u9-rude", word: "rude", type: "adjective", meaningEn: "Showing bad manners", meaningAr: "وقح / فظ", example: "It's rude to interrupt people.", image: img("rude angry argument"), category: "9 - All Kinds of People" },
  { id: "u9-selfish", word: "selfish", type: "adjective", meaningEn: "Caring only about yourself", meaningAr: "أناني", example: "Don't be selfish; share with your sister.", image: img("selfish greedy"), category: "9 - All Kinds of People" },
  { id: "u9-serious", word: "serious", type: "adjective", meaningEn: "Not joking; thoughtful", meaningAr: "جاد", example: "He gave me a serious look.", image: img("serious face"), category: "9 - All Kinds of People" },
  { id: "u9-silly", word: "silly", type: "adjective", meaningEn: "Foolish or playful", meaningAr: "سخيف / مرح", example: "Stop being silly!", image: img("silly funny face"), category: "9 - All Kinds of People" },
  { id: "u9-talkative", word: "talkative", type: "adjective", meaningEn: "Liking to talk a lot", meaningAr: "كثير الكلام / ثرثار", example: "My sister is very talkative.", image: img("talking phone gossip"), category: "9 - All Kinds of People" },
  { id: "u9-typical", word: "typical", type: "adjective", meaningEn: "Showing the usual qualities", meaningAr: "نموذجي / معتاد", example: "It's a typical sunny day in summer.", image: img("normal day people"), category: "9 - All Kinds of People" },
  { id: "u9-unreliable", word: "unreliable", type: "adjective", meaningEn: "Cannot be trusted", meaningAr: "غير موثوق", example: "He's unreliable; he's always late.", image: img("broken late clock"), category: "9 - All Kinds of People" },
  { id: "u9-give-directions", word: "give directions", type: "expression", meaningEn: "To tell someone how to get somewhere", meaningAr: "يُعطي إرشادات / اتجاهات", example: "Can you give me directions to the hotel?", image: img("giving directions map"), category: "9 - All Kinds of People" },
  { id: "u9-hail-taxi", word: "hail a taxi", type: "expression", meaningEn: "To signal a taxi to stop", meaningAr: "يستوقف سيارة أجرة", example: "Let's hail a taxi to the airport.", image: img("hailing taxi yellow"), category: "9 - All Kinds of People" },
  { id: "u9-hand-out", word: "hand out", type: "expression", meaningEn: "To give to many people", meaningAr: "يوزّع", example: "He handed out flyers downtown.", image: img("handing flyers street"), category: "9 - All Kinds of People" },
  { id: "u9-on-duty", word: "on duty", type: "expression", meaningEn: "Working at one's job", meaningAr: "في العمل / على رأس العمل", example: "The doctor is on duty tonight.", image: img("police officer duty"), category: "9 - All Kinds of People" },
  { id: "u9-real-treat", word: "a real treat", type: "expression", meaningEn: "Something especially enjoyable", meaningAr: "شيء ممتع حقاً", example: "Going to the concert was a real treat.", image: img("ice cream treat dessert"), category: "9 - All Kinds of People" },
  { id: "u9-i-mean", word: "I mean", type: "expression", meaningEn: "Used to clarify what was just said", meaningAr: "أقصد / يعني", example: "I mean, it's not that bad.", image: img("explaining talking"), category: "9 - All Kinds of People" },
  { id: "u9-of-course", word: "Of course", type: "expression", meaningEn: "Certainly; naturally", meaningAr: "بالطبع", example: "Of course I'll help you.", image: img("thumbs up yes"), category: "9 - All Kinds of People" },

  // ============================================================
  // UNIT 10 — Who Used My Toothpaste?
  // ============================================================
  { id: "u10-complaint", word: "complaint", type: "noun", meaningEn: "An expression of dissatisfaction", meaningAr: "شكوى", example: "She filed a complaint about the noise.", image: img("complaint angry customer"), category: "10 - Who Used My Toothpaste?" },
  { id: "u10-dishwashing-liquid", word: "dishwashing liquid", type: "noun", meaningEn: "Soap for washing dishes", meaningAr: "سائل غسيل الأطباق", example: "We're out of dishwashing liquid.", image: img("dish soap bottle"), category: "10 - Who Used My Toothpaste?" },
  { id: "u10-hairbrush", word: "hairbrush", type: "noun", meaningEn: "A brush for styling hair", meaningAr: "فرشاة شعر", example: "She used a hairbrush before school.", image: img("hair brush"), category: "10 - Who Used My Toothpaste?" },
  { id: "u10-hair-dryer", word: "hair dryer", type: "noun", meaningEn: "A device that blows hot air to dry hair", meaningAr: "مجفف شعر", example: "She dried her hair with a hair dryer.", image: img("hair dryer blower"), category: "10 - Who Used My Toothpaste?" },
  { id: "u10-mess", word: "mess", type: "noun", meaningEn: "A state of disorder or untidiness", meaningAr: "فوضى", example: "Your room is such a mess!", image: img("messy room clutter"), category: "10 - Who Used My Toothpaste?" },
  { id: "u10-mirror", word: "mirror", type: "noun", meaningEn: "A reflective surface", meaningAr: "مرآة", example: "She looked at herself in the mirror.", image: img("bathroom mirror"), category: "10 - Who Used My Toothpaste?" },
  { id: "u10-nail-polish", word: "nail polish", type: "noun", meaningEn: "Colored coating for fingernails", meaningAr: "طلاء أظافر", example: "She put on red nail polish.", image: img("nail polish red"), category: "10 - Who Used My Toothpaste?" },
  { id: "u10-nephew", word: "nephew", type: "noun", meaningEn: "Your brother's or sister's son", meaningAr: "ابن الأخ / ابن الأخت", example: "My nephew is five years old.", image: img("little boy child"), category: "10 - Who Used My Toothpaste?" },
  { id: "u10-scissors", word: "scissors", type: "noun", meaningEn: "A cutting tool with two blades", meaningAr: "مقص", example: "Cut the paper with scissors.", image: img("scissors"), category: "10 - Who Used My Toothpaste?" },
  { id: "u10-shampoo", word: "shampoo", type: "noun", meaningEn: "Soap for washing hair", meaningAr: "شامبو", example: "I need to buy more shampoo.", image: img("shampoo bottle"), category: "10 - Who Used My Toothpaste?" },
  { id: "u10-toothpaste", word: "toothpaste", type: "noun", meaningEn: "Paste used to clean teeth", meaningAr: "معجون أسنان", example: "Don't forget to use toothpaste.", image: img("toothpaste tube"), category: "10 - Who Used My Toothpaste?" },
  { id: "u10-annoy", word: "annoy", type: "verb", meaningEn: "To make someone slightly angry", meaningAr: "يُزعج", example: "Stop annoying your sister!", image: img("annoyed angry face"), category: "10 - Who Used My Toothpaste?" },
  { id: "u10-avoid", word: "avoid", type: "verb", meaningEn: "To stay away from", meaningAr: "يتجنّب", example: "Try to avoid junk food.", image: img("avoiding obstacle"), category: "10 - Who Used My Toothpaste?" },
  { id: "u10-borrow", word: "borrow", type: "verb", meaningEn: "To take something temporarily", meaningAr: "يستعير", example: "Can I borrow your pen?", image: img("lending book"), category: "10 - Who Used My Toothpaste?" },
  { id: "u10-feed", word: "feed", type: "verb", meaningEn: "To give food to", meaningAr: "يُطعم", example: "Don't forget to feed the cat.", image: img("feeding cat dog pet"), category: "10 - Who Used My Toothpaste?" },
  { id: "u10-finish", word: "finish", type: "verb", meaningEn: "To complete something", meaningAr: "يُنهي", example: "Please finish your homework.", image: img("finish line race"), category: "10 - Who Used My Toothpaste?" },
  { id: "u10-imagine", word: "imagine", type: "verb", meaningEn: "To form a picture in your mind", meaningAr: "يتخيّل", example: "Imagine you're on a beach.", image: img("imagination dreaming"), category: "10 - Who Used My Toothpaste?" },
  { id: "u10-irritate", word: "irritate", type: "verb", meaningEn: "To annoy or make uncomfortable", meaningAr: "يُهيّج / يُزعج", example: "Loud music irritates me.", image: img("irritated frustrated"), category: "10 - Who Used My Toothpaste?" },
  { id: "u10-mind", word: "mind", type: "verb", meaningEn: "To object or be bothered by", meaningAr: "يمانع", example: "Do you mind if I sit here?", image: img("thinking decision"), category: "10 - Who Used My Toothpaste?" },
  { id: "u10-splash", word: "splash", type: "verb", meaningEn: "To scatter liquid", meaningAr: "يرشّ / يبلّل", example: "The kids splash water in the pool.", image: img("water splash pool"), category: "10 - Who Used My Toothpaste?" },
  { id: "u10-stand", word: "stand", type: "verb", meaningEn: "To tolerate something", meaningAr: "يتحمّل", example: "I can't stand the noise.", image: img("standing person"), category: "10 - Who Used My Toothpaste?" },
  { id: "u10-suggest", word: "suggest", type: "verb", meaningEn: "To propose an idea", meaningAr: "يقترح", example: "I suggest we leave early.", image: img("suggestion idea pointing"), category: "10 - Who Used My Toothpaste?" },
  { id: "u10-blow-up", word: "blow up", type: "verb", meaningEn: "To explode or inflate", meaningAr: "ينفجر / ينفخ", example: "Let's blow up the balloons.", image: img("balloon party"), category: "10 - Who Used My Toothpaste?" },
  { id: "u10-clean-up", word: "clean up", type: "verb", meaningEn: "To make tidy and clean", meaningAr: "ينظّف", example: "Please clean up your room.", image: img("cleaning house broom"), category: "10 - Who Used My Toothpaste?" },
  { id: "u10-give-back", word: "give back", type: "verb", meaningEn: "To return something", meaningAr: "يُعيد", example: "Give back my book, please.", image: img("returning book"), category: "10 - Who Used My Toothpaste?" },
  { id: "u10-give-up", word: "give up", type: "verb", meaningEn: "To stop trying", meaningAr: "يستسلم", example: "Don't give up! Keep trying.", image: img("giving up tired"), category: "10 - Who Used My Toothpaste?" },
  { id: "u10-mess-up", word: "mess up", type: "verb", meaningEn: "To make a mistake or cause disorder", meaningAr: "يُفسد / يُخطئ", example: "I messed up the recipe.", image: img("mistake mess"), category: "10 - Who Used My Toothpaste?" },
  { id: "u10-put-away", word: "put away", type: "verb", meaningEn: "To store in the proper place", meaningAr: "يضع في مكانه", example: "Put away your toys.", image: img("organizing storage"), category: "10 - Who Used My Toothpaste?" },
  { id: "u10-put-back", word: "put back", type: "verb", meaningEn: "To return to original position", meaningAr: "يُرجع إلى مكانه", example: "Put the book back on the shelf.", image: img("shelf books organize"), category: "10 - Who Used My Toothpaste?" },
  { id: "u10-take-over", word: "take over", type: "verb", meaningEn: "To take control of something", meaningAr: "يتولّى المسؤولية", example: "She'll take over the project next week.", image: img("business meeting takeover"), category: "10 - Who Used My Toothpaste?" },
  { id: "u10-turn-down", word: "turn down", type: "verb", meaningEn: "To lower the volume / refuse", meaningAr: "يخفض الصوت / يرفض", example: "Turn down the music, please.", image: img("volume knob low"), category: "10 - Who Used My Toothpaste?" },
  { id: "u10-turn-off", word: "turn off", type: "verb", meaningEn: "To stop a device from working", meaningAr: "يطفئ", example: "Turn off the lights when you leave.", image: img("light switch off"), category: "10 - Who Used My Toothpaste?" },
  { id: "u10-dirty", word: "dirty", type: "adjective", meaningEn: "Not clean", meaningAr: "متّسخ", example: "Your shoes are dirty.", image: img("dirty muddy shoes"), category: "10 - Who Used My Toothpaste?" },
  { id: "u10-already", word: "already", type: "adverb", meaningEn: "Before now or before a certain time", meaningAr: "بالفعل / مسبقاً", example: "I've already finished my homework.", image: img("clock done finished"), category: "10 - Who Used My Toothpaste?" },
  { id: "u10-just", word: "just", type: "adverb", meaningEn: "A very short time ago", meaningAr: "للتو / منذ قليل", example: "I just got home.", image: img("clock now moment"), category: "10 - Who Used My Toothpaste?" },
  { id: "u10-yet", word: "yet", type: "adverb", meaningEn: "Up to now (in questions/negatives)", meaningAr: "حتى الآن / بعد", example: "Have you finished yet?", image: img("waiting clock not yet"), category: "10 - Who Used My Toothpaste?" },
  { id: "u10-make-at-home", word: "make oneself at home", type: "expression", meaningEn: "To feel comfortable as if in your own home", meaningAr: "تصرّف كأنك في منزلك", example: "Please come in and make yourself at home.", image: img("cozy living room sofa"), category: "10 - Who Used My Toothpaste?" },
  { id: "u10-wait-in-line", word: "wait in line", type: "expression", meaningEn: "To stand in a line waiting your turn", meaningAr: "ينتظر في الصف", example: "We had to wait in line for an hour.", image: img("people queue line waiting"), category: "10 - Who Used My Toothpaste?" },
  { id: "u10-at-long-last", word: "At long last!", type: "expression", meaningEn: "Finally, after a long wait", meaningAr: "أخيراً!", example: "At long last, the rain has stopped.", image: img("finally relief celebration"), category: "10 - Who Used My Toothpaste?" },
  { id: "u10-bit-too-much", word: "That's a bit too much.", type: "expression", meaningEn: "That's excessive", meaningAr: "هذا أكثر من اللازم", example: "Five hours of TV? That's a bit too much.", image: img("too much excessive overload"), category: "10 - Who Used My Toothpaste?" },

  // ============================================================
  // UNIT 11 — Making Choices
  // ============================================================
  { id: "u11-airshow", word: "airshow", type: "noun", meaningEn: "A public display of flying aircraft", meaningAr: "عرض طيران", example: "The airshow was amazing to watch.", image: img("airshow plane sky"), category: "11 - Making Choices" },
  { id: "u11-benefit", word: "benefit", type: "noun", meaningEn: "An advantage or good result", meaningAr: "فائدة", example: "Exercise has many health benefits.", image: img("benefit advantage health"), category: "11 - Making Choices" },
  { id: "u11-choice", word: "choice", type: "noun", meaningEn: "A decision between options", meaningAr: "اختيار", example: "You have to make a choice.", image: img("choice options decision"), category: "11 - Making Choices" },
  { id: "u11-conservationist", word: "conservationist", type: "noun", meaningEn: "Someone who protects nature", meaningAr: "مدافع عن البيئة", example: "She's a famous conservationist.", image: img("nature conservation forest"), category: "11 - Making Choices" },
  { id: "u11-environment", word: "environment", type: "noun", meaningEn: "The natural world around us", meaningAr: "البيئة", example: "We must protect the environment.", image: img("environment nature green"), category: "11 - Making Choices" },
  { id: "u11-farmer", word: "farmer", type: "noun", meaningEn: "Someone who works on a farm", meaningAr: "مزارع", example: "The farmer grows vegetables.", image: img("farmer field tractor"), category: "11 - Making Choices" },
  { id: "u11-graduation", word: "graduation", type: "noun", meaningEn: "Ceremony of completing studies", meaningAr: "حفل التخرّج", example: "Her graduation is next week.", image: img("graduation cap ceremony"), category: "11 - Making Choices" },
  { id: "u11-pollution", word: "pollution", type: "noun", meaningEn: "Harmful substances in the environment", meaningAr: "تلوّث", example: "Air pollution is a big problem.", image: img("pollution smoke factory"), category: "11 - Making Choices" },
  { id: "u11-preference", word: "preference", type: "noun", meaningEn: "Liking one thing more than another", meaningAr: "تفضيل", example: "Do you have a preference for tea or coffee?", image: img("preference choice tea coffee"), category: "11 - Making Choices" },
  { id: "u11-resort", word: "resort", type: "noun", meaningEn: "A place for vacations and relaxation", meaningAr: "منتجع", example: "We stayed at a beach resort.", image: img("beach resort vacation"), category: "11 - Making Choices" },
  { id: "u11-route", word: "route", type: "noun", meaningEn: "The way from one place to another", meaningAr: "طريق / مسار", example: "Take the shortest route home.", image: img("road route map"), category: "11 - Making Choices" },
  { id: "u11-scholarship", word: "scholarship", type: "noun", meaningEn: "Financial help for education", meaningAr: "منحة دراسية", example: "She got a scholarship to study abroad.", image: img("scholarship graduation diploma"), category: "11 - Making Choices" },
  { id: "u11-subject", word: "subject", type: "noun", meaningEn: "A topic of study", meaningAr: "مادة دراسية / موضوع", example: "Math is my favorite subject.", image: img("classroom school subject"), category: "11 - Making Choices" },
  { id: "u11-care", word: "care", type: "verb", meaningEn: "To feel concern or interest", meaningAr: "يهتم", example: "I care about my family.", image: img("caring family love"), category: "11 - Making Choices" },
  { id: "u11-fail", word: "fail", type: "verb", meaningEn: "To not succeed", meaningAr: "يفشل / يرسب", example: "Don't be afraid to fail.", image: img("failed exam sad"), category: "11 - Making Choices" },
  { id: "u11-fit-in", word: "fit in", type: "verb", meaningEn: "To feel accepted in a group", meaningAr: "ينسجم / يندمج", example: "She fits in well at her new school.", image: img("group friends fitting in"), category: "11 - Making Choices" },
  { id: "u11-generate", word: "generate", type: "verb", meaningEn: "To produce or create", meaningAr: "يولّد / يُنتج", example: "Solar panels generate electricity.", image: img("solar panel energy"), category: "11 - Making Choices" },
  { id: "u11-graduate", word: "graduate", type: "verb", meaningEn: "To complete studies and earn a degree", meaningAr: "يتخرّج", example: "She'll graduate next June.", image: img("graduation cap student"), category: "11 - Making Choices" },
  { id: "u11-interfere", word: "interfere", type: "verb", meaningEn: "To get involved without being asked", meaningAr: "يتدخّل", example: "Don't interfere in their argument.", image: img("interfere argument"), category: "11 - Making Choices" },
  { id: "u11-involve", word: "involve", type: "verb", meaningEn: "To include as a necessary part", meaningAr: "يتضمّن / يشمل", example: "The job involves a lot of travel.", image: img("teamwork involvement"), category: "11 - Making Choices" },
  { id: "u11-pass-test", word: "pass (a test)", type: "verb", meaningEn: "To succeed in a test", meaningAr: "ينجح في اختبار", example: "I hope to pass the math test.", image: img("passed exam success a+"), category: "11 - Making Choices" },
  { id: "u11-study", word: "study", type: "verb", meaningEn: "To learn about a subject", meaningAr: "يدرس", example: "She studies every night.", image: img("student studying books"), category: "11 - Making Choices" },
  { id: "u11-scenic", word: "scenic", type: "adjective", meaningEn: "Having beautiful natural views", meaningAr: "ذو مناظر خلّابة", example: "We took the scenic route home.", image: img("scenic landscape mountain"), category: "11 - Making Choices" },
  { id: "u11-be-against", word: "be against", type: "expression", meaningEn: "To oppose something", meaningAr: "يعارض", example: "I'm against cutting down trees.", image: img("protest sign against"), category: "11 - Making Choices" },
  { id: "u11-feel-like", word: "feel like (doing)", type: "expression", meaningEn: "To want to do something", meaningAr: "يرغب في فعل شيء", example: "I feel like going for a walk.", image: img("walking park relaxing"), category: "11 - Making Choices" },
  { id: "u11-get-chance", word: "get a chance", type: "expression", meaningEn: "To have an opportunity", meaningAr: "يحصل على فرصة", example: "I never got a chance to speak.", image: img("opportunity door open"), category: "11 - Making Choices" },
  { id: "u11-get-caught", word: "get caught", type: "expression", meaningEn: "To be discovered doing something wrong", meaningAr: "يُمسك متلبساً", example: "He got caught cheating on the exam.", image: img("caught red handed"), category: "11 - Making Choices" },
  { id: "u11-would-rather", word: "would rather", type: "expression", meaningEn: "To prefer to", meaningAr: "يُفضّل أن", example: "I would rather stay home tonight.", image: img("choosing preferring"), category: "11 - Making Choices" },
  { id: "u11-seems-to-me", word: "It seems to me", type: "expression", meaningEn: "In my opinion", meaningAr: "يبدو لي", example: "It seems to me that he's right.", image: img("thinking opinion"), category: "11 - Making Choices" },
  { id: "u11-make-up-mind", word: "make up your mind", type: "expression", meaningEn: "To make a final decision", meaningAr: "يحسم قراره", example: "Hurry up and make up your mind!", image: img("decision crossroads"), category: "11 - Making Choices" },
  { id: "u11-up-in-the-air", word: "up in the air", type: "expression", meaningEn: "Not yet decided", meaningAr: "غير محسوم بعد", example: "Our travel plans are still up in the air.", image: img("undecided question marks"), category: "11 - Making Choices" },

  // ============================================================
  // UNIT 12 — Culture Shock
  // ============================================================
  { id: "u12-break", word: "break", type: "noun", meaningEn: "A short rest or pause", meaningAr: "استراحة", example: "Let's take a short break.", image: img("coffee break rest"), category: "12 - Culture Shock" },
  { id: "u12-chopsticks", word: "chopsticks", type: "noun", meaningEn: "Pair of sticks used to eat in Asian cultures", meaningAr: "عيدان الطعام", example: "Can you eat with chopsticks?", image: img("chopsticks asian food"), category: "12 - Culture Shock" },
  { id: "u12-custom", word: "custom", type: "noun", meaningEn: "A traditional way of behaving", meaningAr: "عادة / تقليد", example: "It's a custom to remove your shoes here.", image: img("cultural tradition ceremony"), category: "12 - Culture Shock" },
  { id: "u12-dust", word: "dust", type: "noun", meaningEn: "Fine particles of dirt", meaningAr: "غبار", example: "The shelves are covered in dust.", image: img("dust dirty surface"), category: "12 - Culture Shock" },
  { id: "u12-graduate", word: "graduate", type: "noun", meaningEn: "Someone who completed a degree", meaningAr: "خريج", example: "She's a recent graduate of the university.", image: img("graduate student diploma"), category: "12 - Culture Shock" },
  { id: "u12-guest", word: "guest", type: "noun", meaningEn: "A person invited to someone's home", meaningAr: "ضيف", example: "We have guests coming for dinner.", image: img("guest dinner welcome"), category: "12 - Culture Shock" },
  { id: "u12-host", word: "host", type: "noun", meaningEn: "A person who receives guests", meaningAr: "مُضيف", example: "She's a wonderful host.", image: img("host welcoming guests"), category: "12 - Culture Shock" },
  { id: "u12-impression", word: "impression", type: "noun", meaningEn: "An idea or feeling about someone/something", meaningAr: "انطباع", example: "First impressions are important.", image: img("first impression handshake"), category: "12 - Culture Shock" },
  { id: "u12-lawyer", word: "lawyer", type: "noun", meaningEn: "A person who practices law", meaningAr: "محامٍ", example: "She wants to be a lawyer.", image: img("lawyer suit court"), category: "12 - Culture Shock" },
  { id: "u12-mud", word: "mud", type: "noun", meaningEn: "Wet soft earth", meaningAr: "طين / وحل", example: "The kids played in the mud.", image: img("mud muddy ground"), category: "12 - Culture Shock" },
  { id: "u12-pocket", word: "pocket", type: "noun", meaningEn: "A small bag sewn into clothing", meaningAr: "جيب", example: "He put the keys in his pocket.", image: img("pocket jeans hand"), category: "12 - Culture Shock" },
  { id: "u12-porter", word: "porter", type: "noun", meaningEn: "A person who carries luggage", meaningAr: "حمّال أمتعة", example: "The porter helped us with our bags.", image: img("porter hotel luggage"), category: "12 - Culture Shock" },
  { id: "u12-shock", word: "shock", type: "noun", meaningEn: "A sudden upsetting surprise", meaningAr: "صدمة", example: "The news came as a shock.", image: img("shocked surprise face"), category: "12 - Culture Shock" },
  { id: "u12-surname", word: "surname", type: "noun", meaningEn: "Family name; last name", meaningAr: "اسم العائلة", example: "Please write your surname here.", image: img("name signature form"), category: "12 - Culture Shock" },
  { id: "u12-tip-noun", word: "tip", type: "noun", meaningEn: "Money given for service / helpful advice", meaningAr: "إكرامية / نصيحة", example: "I left a tip for the waiter.", image: img("tip money waiter restaurant"), category: "12 - Culture Shock" },
  { id: "u12-topic", word: "topic", type: "noun", meaningEn: "A subject discussed", meaningAr: "موضوع للنقاش", example: "Let's change the topic.", image: img("discussion topic conversation"), category: "12 - Culture Shock" },
  { id: "u12-adjust", word: "adjust", type: "verb", meaningEn: "To change to fit a new situation", meaningAr: "يتأقلم / يضبط", example: "It takes time to adjust to a new country.", image: img("adjusting settings adapt"), category: "12 - Culture Shock" },
  { id: "u12-allow", word: "allow", type: "verb", meaningEn: "To give permission", meaningAr: "يسمح", example: "Pets are not allowed here.", image: img("permission allowed sign"), category: "12 - Culture Shock" },
  { id: "u12-block", word: "block", type: "verb", meaningEn: "To stop something from passing", meaningAr: "يسد / يعيق", example: "A car is blocking the road.", image: img("blocked road barrier"), category: "12 - Culture Shock" },
  { id: "u12-bump-into", word: "bump (into)", type: "verb", meaningEn: "To meet someone unexpectedly", meaningAr: "يصادف / يلتقي مصادفة", example: "I bumped into an old friend today.", image: img("meeting friends street"), category: "12 - Culture Shock" },
  { id: "u12-comment", word: "comment", type: "verb", meaningEn: "To express an opinion", meaningAr: "يعلّق", example: "She commented on the new design.", image: img("comment speech bubble"), category: "12 - Culture Shock" },
  { id: "u12-exchange", word: "exchange", type: "verb", meaningEn: "To give one thing and receive another", meaningAr: "يتبادل", example: "We exchanged gifts at Christmas.", image: img("exchange gift swap"), category: "12 - Culture Shock" },
  { id: "u12-expect", word: "expect", type: "verb", meaningEn: "To think something will happen", meaningAr: "يتوقّع", example: "I expect to arrive at noon.", image: img("waiting expecting clock"), category: "12 - Culture Shock" },
  { id: "u12-handle", word: "handle", type: "verb", meaningEn: "To deal with a situation", meaningAr: "يتعامل مع", example: "She can handle any problem.", image: img("handling problem solving"), category: "12 - Culture Shock" },
  { id: "u12-manage", word: "manage", type: "verb", meaningEn: "To succeed in doing something difficult", meaningAr: "يتدبّر / ينجح في", example: "I managed to finish on time.", image: img("managing success business"), category: "12 - Culture Shock" },
  { id: "u12-remove", word: "remove", type: "verb", meaningEn: "To take away", meaningAr: "يُزيل", example: "Please remove your shoes.", image: img("removing shoes door"), category: "12 - Culture Shock" },
  { id: "u12-rest", word: "rest", type: "verb", meaningEn: "To stop activity to relax", meaningAr: "يستريح", example: "You should rest after exercise.", image: img("resting hammock relax"), category: "12 - Culture Shock" },
  { id: "u12-rush", word: "rush", type: "verb", meaningEn: "To do something very quickly", meaningAr: "يُسرع / يستعجل", example: "Don't rush; we have time.", image: img("rush hour running"), category: "12 - Culture Shock" },
  { id: "u12-spear", word: "spear", type: "verb", meaningEn: "To pierce with a sharp object", meaningAr: "يطعن بشيء حاد", example: "He speared the food with his fork.", image: img("fishing spear"), category: "12 - Culture Shock" },
  { id: "u12-spread", word: "spread", type: "verb", meaningEn: "To extend over an area", meaningAr: "ينتشر / يفرد", example: "News spreads fast online.", image: img("spreading butter bread"), category: "12 - Culture Shock" },
  { id: "u12-tip-verb", word: "tip", type: "verb", meaningEn: "To give money for a service", meaningAr: "يُعطي إكرامية", example: "Don't forget to tip the waiter.", image: img("tipping money waiter"), category: "12 - Culture Shock" },
  { id: "u12-crowded", word: "crowded", type: "adjective", meaningEn: "Full of people", meaningAr: "مزدحم", example: "The bus was very crowded.", image: img("crowded street people"), category: "12 - Culture Shock" },
  { id: "u12-customary", word: "customary", type: "adjective", meaningEn: "Usual; following custom", meaningAr: "اعتيادي / متعارف عليه", example: "It's customary to bring a gift.", image: img("cultural custom tradition"), category: "12 - Culture Shock" },
  { id: "u12-globalized", word: "globalized", type: "adjective", meaningEn: "Connected with the whole world", meaningAr: "مُعَوْلَم", example: "We live in a globalized world.", image: img("globe world connected"), category: "12 - Culture Shock" },
  { id: "u12-local", word: "local", type: "adjective", meaningEn: "From a particular nearby area", meaningAr: "محلي", example: "Try the local food.", image: img("local market shop"), category: "12 - Culture Shock" },
  { id: "u12-punctual", word: "punctual", type: "adjective", meaningEn: "On time; not late", meaningAr: "ملتزم بالمواعيد", example: "Please be punctual for the meeting.", image: img("punctual clock time"), category: "12 - Culture Shock" },
  { id: "u12-relaxed", word: "relaxed", type: "adjective", meaningEn: "Calm and free from worry", meaningAr: "مسترخٍ / مرتاح", example: "She felt relaxed on the beach.", image: img("relaxed beach calm"), category: "12 - Culture Shock" },
  { id: "u12-similar", word: "similar", type: "adjective", meaningEn: "Almost the same", meaningAr: "مشابه", example: "These two cars look similar.", image: img("similar twins matching"), category: "12 - Culture Shock" },
  { id: "u12-tricky", word: "tricky", type: "adjective", meaningEn: "Difficult to do or deal with", meaningAr: "صعب / معقّد", example: "This question is a bit tricky.", image: img("tricky puzzle difficult"), category: "12 - Culture Shock" },
  { id: "u12-accidentally", word: "accidentally", type: "adverb", meaningEn: "By accident; not on purpose", meaningAr: "عن طريق الخطأ", example: "I accidentally broke the cup.", image: img("accident spill oops"), category: "12 - Culture Shock" },
  { id: "u12-patiently", word: "patiently", type: "adverb", meaningEn: "In a calm waiting way", meaningAr: "بصبر", example: "She waited patiently for her turn.", image: img("patient waiting calm"), category: "12 - Culture Shock" },
  { id: "u12-advisable", word: "It's advisable to…", type: "expression", meaningEn: "It is recommended to…", meaningAr: "من المستحسن أن…", example: "It's advisable to book early.", image: img("advice consultation"), category: "12 - Culture Shock" },
  { id: "u12-good-idea", word: "It's a good idea to…", type: "expression", meaningEn: "It is wise to…", meaningAr: "من الجيد أن…", example: "It's a good idea to study daily.", image: img("lightbulb good idea"), category: "12 - Culture Shock" },
  { id: "u12-common-to", word: "It's common to…", type: "expression", meaningEn: "It happens often", meaningAr: "من الشائع أن…", example: "It's common to shake hands here.", image: img("common everyday people"), category: "12 - Culture Shock" },
  { id: "u12-not-polite", word: "It's not polite to… / It's impolite to…", type: "expression", meaningEn: "It shows bad manners", meaningAr: "ليس من المؤدب أن…", example: "It's not polite to talk with your mouth full.", image: img("rude impolite gesture"), category: "12 - Culture Shock" },
  { id: "u12-polite-to", word: "It's polite to…", type: "expression", meaningEn: "It shows good manners", meaningAr: "من المؤدب أن…", example: "It's polite to say thank you.", image: img("polite bow respectful"), category: "12 - Culture Shock" },
  { id: "u12-rude-to", word: "It's rude to…", type: "expression", meaningEn: "It is impolite to…", meaningAr: "من الوقاحة أن…", example: "It's rude to point at people.", image: img("rude pointing finger"), category: "12 - Culture Shock" },
  { id: "u12-wrong-to", word: "It's wrong to…", type: "expression", meaningEn: "It is morally incorrect", meaningAr: "من الخطأ أن…", example: "It's wrong to lie to your friends.", image: img("wrong x mark error"), category: "12 - Culture Shock" },
  { id: "u12-be-sure", word: "Be sure to…", type: "expression", meaningEn: "Make certain to do…", meaningAr: "تأكد من أن…", example: "Be sure to lock the door.", image: img("checklist reminder"), category: "12 - Culture Shock" },
  { id: "u12-dont-forget", word: "Don't forget to…", type: "expression", meaningEn: "Remember to do…", meaningAr: "لا تنسَ أن…", example: "Don't forget to call me.", image: img("reminder note sticky"), category: "12 - Culture Shock" },
  { id: "u12-make-sure", word: "Make sure to…", type: "expression", meaningEn: "Confirm that you do…", meaningAr: "تأكد من…", example: "Make sure to bring your ID.", image: img("checklist verify"), category: "12 - Culture Shock" },
  { id: "u12-remember-to", word: "Remember to…", type: "expression", meaningEn: "Don't forget to do…", meaningAr: "تذكّر أن…", example: "Remember to take your umbrella.", image: img("memory remember note"), category: "12 - Culture Shock" },
  { id: "u12-try-not-to", word: "Try not to…", type: "expression", meaningEn: "Make an effort to avoid", meaningAr: "حاول ألا…", example: "Try not to be late.", image: img("avoid warning sign"), category: "12 - Culture Shock" },
  { id: "u12-try-to", word: "Try to…", type: "expression", meaningEn: "Make an effort to do…", meaningAr: "حاول أن…", example: "Try to relax.", image: img("trying effort attempt"), category: "12 - Culture Shock" },
  { id: "u12-be-based", word: "be based", type: "expression", meaningEn: "To have a main location", meaningAr: "يكون مقرّه في", example: "The company is based in Tokyo.", image: img("company office headquarters"), category: "12 - Culture Shock" },
  { id: "u12-be-on-time", word: "be on time", type: "expression", meaningEn: "To arrive at the right time", meaningAr: "يحضر في الوقت المحدد", example: "Please be on time tomorrow.", image: img("punctual clock arrived"), category: "12 - Culture Shock" },
  { id: "u12-stand-in-line", word: "stand in line", type: "expression", meaningEn: "To wait in a queue", meaningAr: "يقف في الصف", example: "We had to stand in line for tickets.", image: img("queue line waiting people"), category: "12 - Culture Shock" },
  { id: "u12-wait-your-turn", word: "wait your turn", type: "expression", meaningEn: "To wait until it's your time", meaningAr: "ينتظر دوره", example: "Please wait your turn.", image: img("waiting room turn"), category: "12 - Culture Shock" },
  { id: "u12-whats-it-like", word: "What's it like…?", type: "expression", meaningEn: "How is it? Used to ask description", meaningAr: "كيف هو…؟", example: "What's it like living in Japan?", image: img("curious question asking"), category: "12 - Culture Shock" },
  { id: "u12-kind-of", word: "kind of", type: "expression", meaningEn: "Somewhat; a little", meaningAr: "نوعاً ما", example: "I'm kind of tired today.", image: img("sort of maybe shrug"), category: "12 - Culture Shock" },
  { id: "u12-no-kidding", word: "No kidding!", type: "expression", meaningEn: "Really? That's surprising!", meaningAr: "حقاً؟! / لا تمزح!", example: "You won? No kidding!", image: img("surprised disbelief"), category: "12 - Culture Shock" },
  { id: "u12-to-be-honest", word: "to be honest", type: "expression", meaningEn: "Speaking truthfully", meaningAr: "بصراحة", example: "To be honest, I don't like it.", image: img("honest truth talking"), category: "12 - Culture Shock" },
  { id: "u12-get-hang-of", word: "to get the hang of", type: "expression", meaningEn: "To learn how to do something", meaningAr: "يتقن / يعتاد على", example: "It takes time to get the hang of driving.", image: img("learning skill practice"), category: "12 - Culture Shock" },
];

export const categories = Array.from(new Set(vocabulary.map((w) => w.category)));

export function getWordsByCategory(category: string): VocabWord[] {
  return vocabulary.filter((w) => w.category === category);
}

export function speakWord(text: string, lang: string = "en-US"): void {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = lang;
  utter.rate = 0.9;
  window.speechSynthesis.speak(utter);
}
