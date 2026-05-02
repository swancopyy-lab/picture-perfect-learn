import gloveCompartmentImg from "@/assets/glove-compartment.jpg";
import gasTankImg from "@/assets/gas-tank.jpg";
import wellExamImg from "@/assets/well-exam.jpg";
import selfishImg from "@/assets/unit9/selfish.png";
import seriousImg from "@/assets/unit9/serious.jpg";
import sillyImg from "@/assets/unit9/silly.jpg";
import talkativeImg from "@/assets/unit9/talkative.jpg";
import typicalImg from "@/assets/unit9/typical.jpg";
import unreliableImg from "@/assets/unit9/unreliable.jpg";
import giveDirectionsImg from "@/assets/unit9/give-directions.jpg";
import hailTaxiImg from "@/assets/unit9/hail-taxi.jpg";
import handOutImg from "@/assets/unit9/hand-out.jpg";
import onDutyImg from "@/assets/unit9/on-duty.jpg";
import realTreatImg from "@/assets/unit9/real-treat.jpg";
import iMeanImg from "@/assets/unit9/i-mean.jpg";
import ofCourseImg from "@/assets/unit9/of-course.jpg";
import complaintImg from "@/assets/unit10/complaint.jpg";
import dishwashingImg from "@/assets/unit10/dishwashing.jpg";
import hairbrushImg from "@/assets/unit10/hairbrush.jpg";
import hairDryerImg from "@/assets/unit10/hair-dryer.jpg";
import messImg from "@/assets/unit10/mess.jpg";
import mirrorImg from "@/assets/unit10/mirror.jpg";
import nailPolishImg from "@/assets/unit10/nail-polish.jpg";
import nephewImg from "@/assets/unit10/nephew.jpg";
import scissorsImg from "@/assets/unit10/scissors.jpg";
import shampooImg from "@/assets/unit10/shampoo.jpg";
import toothpasteImg from "@/assets/unit10/toothpaste.jpg";
import annoyImg from "@/assets/unit10/annoy.jpg";
import avoidImg from "@/assets/unit10/avoid.jpg";
import borrowImg from "@/assets/unit10/borrow.jpg";
import feedImg from "@/assets/unit10/feed.jpg";
import finishImg from "@/assets/unit10/finish.jpg";
import imagineImg from "@/assets/unit10/imagine.jpg";
import irritateImg from "@/assets/unit10/irritate.jpg";
import mindImg from "@/assets/unit10/mind.jpg";
import splashImg from "@/assets/unit10/splash.jpg";
import standImg from "@/assets/unit10/stand.jpg";
import suggestImg from "@/assets/unit10/suggest.jpg";
import blowUpImg from "@/assets/unit10/blow-up.png";
import cleanUpImg from "@/assets/unit10/clean-up.jpg";
import giveBackImg from "@/assets/unit10/give-back.png";
import giveUpImg from "@/assets/unit10/give-up.jpg";
import takeOverImg from "@/assets/unit10/take-over.jpg";
import turnDownImg from "@/assets/unit10/turn-down.jpg";
import messUpImg from "@/assets/unit10/mess-up.jpg";
import putAwayImg from "@/assets/unit10/put-away.png";
import putBackImg from "@/assets/unit10/put-back.png";
import dirtyImg from "@/assets/unit10/dirty.jpg";
import airshowImg from "@/assets/unit11/airshow.jpg";
import conservationistImg from "@/assets/unit11/conservationist.jpg";
import farmerImg from "@/assets/unit11/farmer.jpg";
import graduationImg from "@/assets/unit11/graduation.jpg";
import pollutionImg from "@/assets/unit11/pollution.jpg";
import resortImg from "@/assets/unit11/resort.jpg";
import routeImg from "@/assets/unit11/route.jpg";
import subjectImg from "@/assets/unit11/subject.jpg";
import careImg from "@/assets/unit11/care.jpg";
import fitInImg from "@/assets/unit11/fit-in.jpg";
import graduateImg from "@/assets/unit11/graduate.jpg";
import speedImg from "@/assets/unit11/speed.jpg";
import studyImg from "@/assets/unit11/study.jpg";
import scenicImg from "@/assets/unit11/scenic.jpg";

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

const img = (id: string) => `https://images.unsplash.com/${id}?w=600&q=80&auto=format`;
const vec = (id: string) => `https://images.unsplash.com/vector-${id}?w=600&q=80&auto=format`;

export const vocabulary: VocabWord[] = [
  // ============================================================
  // UNIT 7 — It's a Good Deal, Isn't It?
  // ============================================================
  { id: "u7-antique", word: "antique", type: "noun", meaningEn: "A collectible old item of value", meaningAr: "قطعة أثرية / تحفة قديمة", example: "She found a beautiful antique at the garage sale.", image: img("photo-1719404363194-dc169ee1bc75"), category: "7 - It's a Good Deal" },
  { id: "u7-broom", word: "broom", type: "noun", meaningEn: "A brush with a long handle for sweeping", meaningAr: "مكنسة يدوية", example: "She swept the floor with a broom.", image: img("photo-1638900999395-22595e1785f6"), category: "7 - It's a Good Deal" },
  { id: "u7-cup", word: "cup", type: "noun", meaningEn: "A small container for drinking", meaningAr: "كوب / فنجان", example: "Would you like a cup of tea?", image: img("photo-1514228742587-6b1558fcca3d"), category: "7 - It's a Good Deal" },
  { id: "u7-fan", word: "fan", type: "noun", meaningEn: "A device that moves air to cool", meaningAr: "مروحة", example: "Turn on the fan, it's hot today.", image: img("photo-1665298455913-dd43714f5ad1"), category: "7 - It's a Good Deal" },
  { id: "u7-fork", word: "fork", type: "noun", meaningEn: "An eating utensil with prongs", meaningAr: "شوكة", example: "Use your fork to eat the salad.", image: img("photo-1569702824812-351205c9cde5"), category: "7 - It's a Good Deal" },
  { id: "u7-frying-pan", word: "frying pan", type: "noun", meaningEn: "A flat pan for cooking food in oil", meaningAr: "مقلاة", example: "Cook the eggs in a frying pan.", image: img("photo-1592156328697-079f6ee0cfa5"), category: "7 - It's a Good Deal" },
  { id: "u7-garage-sale", word: "garage sale", type: "noun", meaningEn: "A sale of used items from a home", meaningAr: "بيع أغراض مستعملة في المرآب", example: "We found great deals at the garage sale.", image: img("photo-1760625345932-448b852afdf9"), category: "7 - It's a Good Deal" },
  { id: "u7-garbage-can", word: "garbage can", type: "noun", meaningEn: "A container for waste", meaningAr: "سلة المهملات", example: "Throw it in the garbage can.", image: "https://plus.unsplash.com/premium_photo-1664392292014-9b4e83e12bb5?w=600&q=80&auto=format", category: "7 - It's a Good Deal" },
  { id: "u7-grass", word: "grass", type: "noun", meaningEn: "Green plants covering the ground", meaningAr: "عشب", example: "The kids played on the green grass.", image: img("photo-1567621301854-85b95d32bbf3"), category: "7 - It's a Good Deal" },
  { id: "u7-hammer", word: "hammer", type: "noun", meaningEn: "A tool used for hitting nails", meaningAr: "مطرقة", example: "He used a hammer to hang the picture.", image: img("photo-1586864387967-d02ef85d93e8"), category: "7 - It's a Good Deal" },
  { id: "u7-hose", word: "hose", type: "noun", meaningEn: "A flexible tube for water", meaningAr: "خرطوم", example: "He watered the garden with a hose.", image: img("photo-1697293585549-6eb147d2a8f4"), category: "7 - It's a Good Deal" },
  { id: "u7-knife", word: "knife / knives", type: "noun", meaningEn: "A sharp blade used for cutting", meaningAr: "سكين / سكاكين", example: "Be careful with that sharp knife.", image: img("photo-1593618229012-8aaad1cfefc3"), category: "7 - It's a Good Deal" },
  { id: "u7-ladder", word: "ladder", type: "noun", meaningEn: "A structure for climbing up or down", meaningAr: "سُلّم", example: "He climbed the ladder to fix the roof.", image: img("photo-1519963759188-0e9264cd7992"), category: "7 - It's a Good Deal" },
  { id: "u7-lamp", word: "lamp", type: "noun", meaningEn: "A device that gives light", meaningAr: "مصباح", example: "She turned on the lamp to read.", image: img("photo-1621177555630-b861919c864f"), category: "7 - It's a Good Deal" },
  { id: "u7-lawn-mower", word: "lawn mower", type: "noun", meaningEn: "A machine for cutting grass", meaningAr: "جزّازة عشب", example: "Dad uses the lawn mower every weekend.", image: img("photo-1590820292118-e256c3ac2676"), category: "7 - It's a Good Deal" },
  { id: "u7-luggage", word: "luggage", type: "noun", meaningEn: "Bags and suitcases for traveling", meaningAr: "أمتعة سفر", example: "Don't forget your luggage at the airport.", image: img("photo-1670888664952-efff442ec0d2"), category: "7 - It's a Good Deal" },
  { id: "u7-plate", word: "plate", type: "noun", meaningEn: "A flat dish for serving food", meaningAr: "طبق", example: "Put the food on your plate.", image: img("photo-1568454789753-a689c143d1c5"), category: "7 - It's a Good Deal" },
  { id: "u7-pliers", word: "pliers", type: "noun", meaningEn: "A tool for gripping and bending", meaningAr: "كماشة / زرّادية", example: "Use pliers to pull out the old nail.", image: img("photo-1662830973312-d4360eecce9d"), category: "7 - It's a Good Deal" },
  { id: "u7-pot", word: "pot", type: "noun", meaningEn: "A deep container for cooking", meaningAr: "قِدر", example: "Boil the water in a big pot.", image: img("photo-1587377224035-72144bf39e53"), category: "7 - It's a Good Deal" },
  { id: "u7-rocking-chair", word: "rocking chair", type: "noun", meaningEn: "A chair that moves back and forth", meaningAr: "كرسي هزّاز", example: "Grandma loves sitting in her rocking chair.", image: img("photo-1591935893481-4a5fa6671ec0"), category: "7 - It's a Good Deal" },
  { id: "u7-saucer", word: "saucer", type: "noun", meaningEn: "A small plate placed under a cup", meaningAr: "صحن الفنجان", example: "Place the cup on the saucer.", image: img("photo-1640237915601-ee90fec9cc95"), category: "7 - It's a Good Deal" },
  { id: "u7-saw", word: "saw", type: "noun", meaningEn: "A tool for cutting wood", meaningAr: "منشار", example: "He cut the wood with a saw.", image: img("photo-1749142618156-432f0c4ffb5a"), category: "7 - It's a Good Deal" },
  { id: "u7-screwdriver", word: "screwdriver", type: "noun", meaningEn: "A tool for turning screws", meaningAr: "مفك براغي", example: "I need a screwdriver to fix this.", image: img("photo-1663638964046-4b576e739a3a"), category: "7 - It's a Good Deal" },
  { id: "u7-spoon", word: "spoon", type: "noun", meaningEn: "An eating utensil with a rounded bowl", meaningAr: "ملعقة", example: "Stir the soup with a spoon.", image: img("photo-1588867729565-b593e81f7357"), category: "7 - It's a Good Deal" },
  { id: "u7-teapot", word: "teapot", type: "noun", meaningEn: "A pot for brewing and pouring tea", meaningAr: "إبريق شاي", example: "She poured tea from the teapot.", image: img("photo-1715869486265-36e67690a3df"), category: "7 - It's a Good Deal" },
  { id: "u7-teddy-bear", word: "teddy bear", type: "noun", meaningEn: "A soft stuffed toy bear", meaningAr: "دبدوب", example: "The child sleeps with her teddy bear.", image: "https://plus.unsplash.com/premium_photo-1664373232965-5820c775de3d?w=600&q=80&auto=format", category: "7 - It's a Good Deal" },
  { id: "u7-vacuum-cleaner", word: "vacuum cleaner", type: "noun", meaningEn: "A machine that sucks up dirt", meaningAr: "مكنسة كهربائية", example: "I vacuum the carpet with the vacuum cleaner.", image: img("photo-1722710070534-e31f0290d8de"), category: "7 - It's a Good Deal" },
  { id: "u7-guess", word: "guess", type: "verb", meaningEn: "To estimate without certain knowledge", meaningAr: "يُخمّن", example: "Can you guess the answer?", image: "https://plus.unsplash.com/premium_photo-1680303134459-912abf8efe2f?w=600&q=80&auto=format", category: "7 - It's a Good Deal" },
  { id: "u7-run-on", word: "run on", type: "verb", meaningEn: "To operate using a power source", meaningAr: "يعمل بـ / يشتغل على", example: "This car runs on electricity.", image: img("photo-1560606014-29b5a07abd68"), category: "7 - It's a Good Deal" },
  { id: "u7-be-able-to", word: "be able to", type: "verb", meaningEn: "To have the ability to do something", meaningAr: "يكون قادراً على", example: "She will be able to come tomorrow.", image: "https://plus.unsplash.com/premium_photo-1661266819853-ac00dcaf21d2?w=600&q=80&auto=format", category: "7 - It's a Good Deal" },
  { id: "u7-from-around-here", word: "from around here", type: "expression", meaningEn: "From this area or neighborhood", meaningAr: "من هذه المنطقة", example: "Are you from around here?", image: img("photo-1701206798118-cf1d136a0d0b"), category: "7 - It's a Good Deal" },
  { id: "u7-i-dont-think-so", word: "I don't think so.", type: "expression", meaningEn: "I disagree or doubt it", meaningAr: "لا أعتقد ذلك", example: "Will it rain? I don't think so.", image: img("photo-1590086782974-e6e7b85e738e"), category: "7 - It's a Good Deal" },
  { id: "u7-how-do-you-do", word: "How do you do?", type: "expression", meaningEn: "A formal greeting", meaningAr: "كيف حالك؟ (تحية رسمية)", example: "How do you do? Nice to meet you.", image: img("photo-1758599543157-bc1a94fec33c"), category: "7 - It's a Good Deal" },
  { id: "u7-ill-be-happy-to", word: "I'll be happy to…", type: "expression", meaningEn: "Willing to do something gladly", meaningAr: "سأكون سعيداً بأن…", example: "I'll be happy to help you move.", image: img("photo-1614030390499-f2d2c691b1c7"), category: "7 - It's a Good Deal" },
  { id: "u7-is-that-so", word: "Is that so?", type: "expression", meaningEn: "Really? Is that true?", meaningAr: "هل هذا صحيح؟", example: "You won the lottery? Is that so?", image: img("photo-1758523672207-bc370d350fd9"), category: "7 - It's a Good Deal" },
  { id: "u7-show-around", word: "show someone around", type: "expression", meaningEn: "To give someone a tour of a place", meaningAr: "يأخذ شخصاً في جولة", example: "Let me show you around the office.", image: "https://plus.unsplash.com/premium_photo-1718146017949-c54d1fd3854d?w=600&q=80&auto=format", category: "7 - It's a Good Deal" },

  // ============================================================
  // UNIT 8 — Drive Slowly!
  // ============================================================
  { id: "u8-automatic-transmission", word: "automatic transmission", type: "noun", meaningEn: "A gear system that shifts on its own", meaningAr: "ناقل حركة أوتوماتيكي", example: "Most new cars have automatic transmission.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Kia_Opirus_Automatic_Transmission_Shifter.JPG/640px-Kia_Opirus_Automatic_Transmission_Shifter.JPG", category: "8 - Drive Slowly!" },
  { id: "u8-brake-pedal", word: "brake pedal", type: "noun", meaningEn: "Pedal pressed to slow or stop a car", meaningAr: "دواسة الفرامل", example: "Press the brake pedal slowly.", image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Saabsonettpedals.jpg", category: "8 - Drive Slowly!" },
  { id: "u8-bumper", word: "bumper", type: "noun", meaningEn: "Bar at the front/back of a car for protection", meaningAr: "صادم / مصدّ السيارة", example: "The bumper protects the car in small accidents.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/1976_AMC_Matador_coupe_cocoa_fl-bu.jpg/960px-1976_AMC_Matador_coupe_cocoa_fl-bu.jpg", category: "8 - Drive Slowly!" },
  { id: "u8-dashboard", word: "dashboard", type: "noun", meaningEn: "Panel with controls in front of the driver", meaningAr: "لوحة القيادة", example: "The fuel light on the dashboard is on.", image: img("photo-1615517331072-da8aab44f923"), category: "8 - Drive Slowly!" },
  { id: "u8-exterior", word: "exterior", type: "noun", meaningEn: "The outside of something", meaningAr: "الجزء الخارجي", example: "The car's exterior is bright red.", image: img("photo-1580273916550-e323be2ae537"), category: "8 - Drive Slowly!" },
  { id: "u8-gas-pedal", word: "gas pedal", type: "noun", meaningEn: "Pedal pressed to make the car go faster", meaningAr: "دواسة الوقود", example: "He pressed the gas pedal to speed up.", image: img("photo-1774977866250-89aec8731911"), category: "8 - Drive Slowly!" },
  { id: "u8-gas-tank", word: "gas tank", type: "noun", meaningEn: "Container that holds fuel in a car", meaningAr: "خزان الوقود", example: "The gas tank is almost empty.", image: gasTankImg, category: "8 - Drive Slowly!" },
  { id: "u8-glove-compartment", word: "glove compartment", type: "noun", meaningEn: "Small storage area in front of the passenger seat", meaningAr: "صندوق القفازات / درج الأمامي", example: "The map is in the glove compartment.", image: gloveCompartmentImg, category: "8 - Drive Slowly!" },
  { id: "u8-gps", word: "GPS", type: "noun", meaningEn: "Device that gives directions using satellites", meaningAr: "جهاز تحديد المواقع", example: "Use the GPS to find the address.", image: img("photo-1548502706-f95ce0361ece"), category: "8 - Drive Slowly!" },
  { id: "u8-headlight", word: "headlight", type: "noun", meaningEn: "Front light on a vehicle", meaningAr: "المصباح الأمامي", example: "Turn on your headlights at night.", image: img("photo-1614972973585-eb0e560b9b23"), category: "8 - Drive Slowly!" },
  { id: "u8-highway", word: "highway", type: "noun", meaningEn: "A main public road for fast travel", meaningAr: "طريق سريع", example: "We drove fast on the highway.", image: img("photo-1477951233099-d2c5fbd878ee"), category: "8 - Drive Slowly!" },
  { id: "u8-hood", word: "hood", type: "noun", meaningEn: "Cover over a car's engine", meaningAr: "غطاء محرك السيارة", example: "He opened the hood to check the engine.", image: img("photo-1713566844481-a7f1b60d4255"), category: "8 - Drive Slowly!" },
  { id: "u8-ignition", word: "ignition", type: "noun", meaningEn: "Switch that starts the car engine", meaningAr: "مفتاح تشغيل السيارة", example: "Put the key in the ignition.", image: img("photo-1631565975627-1ab041c0b540"), category: "8 - Drive Slowly!" },
  { id: "u8-interior", word: "interior", type: "noun", meaningEn: "The inside of something", meaningAr: "الجزء الداخلي", example: "The car has a leather interior.", image: img("photo-1624105310151-b84995c652cc"), category: "8 - Drive Slowly!" },
  { id: "u8-pedestrian", word: "pedestrian", type: "noun", meaningEn: "A person walking on a street", meaningAr: "أحد المشاة", example: "Always watch for pedestrians.", image: img("photo-1726520938488-12c3f1f4a1bf"), category: "8 - Drive Slowly!" },
  { id: "u8-rearview-mirror", word: "rearview mirror", type: "noun", meaningEn: "Mirror used to see behind the car", meaningAr: "مرآة الرؤية الخلفية", example: "Check the rearview mirror before turning.", image: img("photo-1605550974143-181e7edc7d86"), category: "8 - Drive Slowly!" },
  { id: "u8-road-sign", word: "road sign", type: "noun", meaningEn: "A sign that gives information to drivers", meaningAr: "إشارة طريق", example: "Obey every road sign.", image: img("photo-1583125320604-8245f1e50c1e"), category: "8 - Drive Slowly!" },
  { id: "u8-seat-belt", word: "seat belt", type: "noun", meaningEn: "A safety strap worn in vehicles", meaningAr: "حزام الأمان", example: "Always wear your seat belt.", image: img("photo-1706288457096-2e9b24eb2823"), category: "8 - Drive Slowly!" },
  { id: "u8-signal-light", word: "signal light", type: "noun", meaningEn: "Light used to show direction of turn", meaningAr: "إشارة الانعطاف", example: "Use the signal light before turning.", image: img("photo-1694787716523-c502712de60c"), category: "8 - Drive Slowly!" },
  { id: "u8-speed-limit", word: "speed limit", type: "noun", meaningEn: "Maximum legal driving speed", meaningAr: "السرعة القصوى المسموحة", example: "The speed limit here is 60.", image: img("photo-1637417494940-1ea47a8a4874"), category: "8 - Drive Slowly!" },
  { id: "u8-steering-wheel", word: "steering wheel", type: "noun", meaningEn: "Wheel used to steer a vehicle", meaningAr: "عجلة القيادة", example: "Keep both hands on the steering wheel.", image: img("photo-1612805144400-88c7821bf36f"), category: "8 - Drive Slowly!" },
  { id: "u8-ticket", word: "ticket", type: "noun", meaningEn: "Official notice of a traffic offense", meaningAr: "مخالفة مرورية", example: "He got a ticket for speeding.", image: img("photo-1684487788413-6565d1ecd892"), category: "8 - Drive Slowly!" },
  { id: "u8-trunk", word: "trunk", type: "noun", meaningEn: "Storage space at the back of a car", meaningAr: "صندوق السيارة الخلفي", example: "Put the bags in the trunk.", image: img("photo-1688054004445-7c9108eb4005"), category: "8 - Drive Slowly!" },
  { id: "u8-windshield", word: "windshield", type: "noun", meaningEn: "Front window of a vehicle", meaningAr: "الزجاج الأمامي للسيارة", example: "A rock cracked the windshield.", image: img("photo-1618934116136-16d28f184b10"), category: "8 - Drive Slowly!" },
  { id: "u8-windshield-wipers", word: "windshield wipers", type: "noun", meaningEn: "Blades that clean the windshield", meaningAr: "ماسحات الزجاج", example: "Turn on the windshield wipers in the rain.", image: img("photo-1663041538617-a691d57bf5e4"), category: "8 - Drive Slowly!" },
  { id: "u8-obey", word: "obey", type: "verb", meaningEn: "To follow rules or commands", meaningAr: "يُطيع", example: "Obey the traffic laws.", image: img("photo-1572289233776-f408eeea86f5"), category: "8 - Drive Slowly!" },
  { id: "u8-pass", word: "pass", type: "verb", meaningEn: "To move past something", meaningAr: "يتجاوز", example: "Don't pass the car on this road.", image: img("photo-1671068708337-9d0c67cd1b3c"), category: "8 - Drive Slowly!" },
  { id: "u8-speed", word: "speed", type: "verb", meaningEn: "To drive faster than the legal limit", meaningAr: "يُسرع", example: "Don't speed in the city.", image: speedImg, category: "8 - Drive Slowly!" },
  { id: "u8-watch-out", word: "watch out", type: "verb", meaningEn: "Be careful; pay attention", meaningAr: "انتبه / احذر", example: "Watch out for that car!", image: vec("1738926671790-51ac3dac60a0"), category: "8 - Drive Slowly!" },
  { id: "u8-carefully", word: "carefully", type: "adverb", meaningEn: "In a cautious way", meaningAr: "بحذر", example: "Drive carefully in the rain.", image: img("photo-1489850846882-35ef10a4b480"), category: "8 - Drive Slowly!" },
  { id: "u8-slowly", word: "slowly", type: "adverb", meaningEn: "At a low speed", meaningAr: "ببطء", example: "Walk slowly across the street.", image: img("photo-1597776941486-054bf5529210"), category: "8 - Drive Slowly!" },
  { id: "u8-well", word: "well", type: "adverb", meaningEn: "In a good or skilled way", meaningAr: "بشكل جيد", example: "She drives very well.", image: wellExamImg, category: "8 - Drive Slowly!" },
  { id: "u8-in-a-hurry", word: "in a hurry", type: "expression", meaningEn: "Doing something quickly because there's little time", meaningAr: "في عجلة من أمره", example: "Sorry, I'm in a hurry.", image: vec("1774859372787-8bb5ff415c70"), category: "8 - Drive Slowly!" },
  { id: "u8-run-into-traffic", word: "run into traffic", type: "expression", meaningEn: "To suddenly get stuck in traffic", meaningAr: "يقع في زحام مروري", example: "We ran into traffic on the way home.", image: img("photo-1665285977193-f2fa8a0b4ffa"), category: "8 - Drive Slowly!" },
  { id: "u8-hey", word: "Hey!", type: "expression", meaningEn: "Used to get someone's attention", meaningAr: "مهلاً! / يا!", example: "Hey! Watch where you're going.", image: vec("1760361691563-278b9e38a193"), category: "8 - Drive Slowly!" },
  { id: "u8-im-doing-60", word: "I'm doing 60.", type: "expression", meaningEn: "I'm driving at 60 mph/kph", meaningAr: "أنا أسير بسرعة 60", example: "Don't worry, I'm doing 60.", image: img("photo-1604973390741-b26cc8ce7dea"), category: "8 - Drive Slowly!" },
  { id: "u8-cant-be-serious", word: "You can't be serious!", type: "expression", meaningEn: "You must be joking", meaningAr: "لا يمكن أن تكون جاداً!", example: "Pay $500? You can't be serious!", image: img("photo-1605814573621-0513c34a0d58"), category: "8 - Drive Slowly!" },

  // ============================================================
  // UNIT 9 — All Kinds of People
  // ============================================================
  { id: "u9-airline", word: "airline", type: "noun", meaningEn: "A company that flies passengers", meaningAr: "شركة طيران", example: "Which airline are you flying with?", image: img("photo-1761599934413-7a600e9292fd"), category: "9 - All Kinds of People" },
  { id: "u9-attraction", word: "attraction", type: "noun", meaningEn: "A place people visit for fun", meaningAr: "معلم سياحي / جذب", example: "The museum is a popular attraction.", image: img("photo-1705445214419-f10affd36c0a"), category: "9 - All Kinds of People" },
  { id: "u9-editor", word: "editor", type: "noun", meaningEn: "A person who edits text or media", meaningAr: "محرّر", example: "The editor checked the article.", image: img("photo-1640646291179-0402254c97de"), category: "9 - All Kinds of People" },
  { id: "u9-event", word: "event", type: "noun", meaningEn: "A planned occasion or activity", meaningAr: "مناسبة / حدث", example: "The wedding was a beautiful event.", image: vec("1744991884812-1ca4ec30631e"), category: "9 - All Kinds of People" },
  { id: "u9-fake", word: "fake", type: "adjective", meaningEn: "Not real or genuine", meaningAr: "مزيّف", example: "This watch is fake.", image: vec("1776244475998-b0a8c5b42b46"), category: "9 - All Kinds of People" },
  { id: "u9-flyers", word: "flyers", type: "noun", meaningEn: "Small printed advertisements", meaningAr: "منشورات إعلانية", example: "He handed out flyers in the street.", image: img("photo-1695634621375-0b66a9d5d1bc"), category: "9 - All Kinds of People" },
  { id: "u9-pedal-cab", word: "pedal cab", type: "noun", meaningEn: "A small taxi powered by pedaling", meaningAr: "عربة تاكسي بدوّاسات", example: "We took a pedal cab through the park.", image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/National_Museum_KL_2008_%28153%29.JPG", category: "9 - All Kinds of People" },
  { id: "u9-thief", word: "thief", type: "noun", meaningEn: "A person who steals", meaningAr: "لص / سارق", example: "The thief ran away with the bag.", image: vec("1738925655844-30f8e41ade3d"), category: "9 - All Kinds of People" },
  { id: "u9-compliment", word: "compliment", type: "verb", meaningEn: "To say something nice about someone", meaningAr: "يُجامل / يُثني على", example: "She complimented my new dress.", image: vec("1775556827129-05ace13bbe5f"), category: "9 - All Kinds of People" },
  { id: "u9-grab", word: "grab", type: "verb", meaningEn: "To take quickly with your hand", meaningAr: "يخطف / يمسك بسرعة", example: "He grabbed his bag and ran.", image: img("photo-1650158569546-ab75f6b3ab62"), category: "9 - All Kinds of People" },
  { id: "u9-recognize", word: "recognize", type: "verb", meaningEn: "To know someone or something you've seen before", meaningAr: "يتعرّف على", example: "I didn't recognize you with your new haircut.", image: img("photo-1581263518256-ba4a28ed5517"), category: "9 - All Kinds of People" },
  { id: "u9-spill", word: "spill", type: "verb", meaningEn: "To accidentally pour out a liquid", meaningAr: "يسكب / يُريق", example: "Don't spill the milk!", image: img("photo-1565136461909-046a4b8292e9"), category: "9 - All Kinds of People" },
  { id: "u9-steal", word: "steal", type: "verb", meaningEn: "To take something that isn't yours", meaningAr: "يسرق", example: "Someone tried to steal my phone.", image: vec("1738330595132-98fcf73e3c19"), category: "9 - All Kinds of People" },
  { id: "u9-absentminded", word: "absentminded", type: "adjective", meaningEn: "Forgetful; not paying attention", meaningAr: "شارد الذهن", example: "My grandpa is a bit absentminded.", image: img("photo-1584598788860-2695a3a6c874"), category: "9 - All Kinds of People" },
  { id: "u9-athletic", word: "athletic", type: "adjective", meaningEn: "Good at sports; physically strong", meaningAr: "رياضي البنية", example: "She's very athletic and runs every day.", image: img("photo-1625834317364-b32c140fd360"), category: "9 - All Kinds of People" },
  { id: "u9-clever", word: "clever", type: "adjective", meaningEn: "Quick to learn; smart", meaningAr: "ذكي / فطن", example: "What a clever idea!", image: img("photo-1571193161738-deaba9b6cc26"), category: "9 - All Kinds of People" },
  { id: "u9-efficient", word: "efficient", type: "adjective", meaningEn: "Working well without waste", meaningAr: "فعّال / كفؤ", example: "She's a very efficient worker.", image: img("photo-1694057335633-a16d90dc49e0"), category: "9 - All Kinds of People" },
  { id: "u9-generous", word: "generous", type: "adjective", meaningEn: "Willing to give freely", meaningAr: "كريم / سخي", example: "He's generous with his money.", image: vec("1776502140531-e9f0384e120b"), category: "9 - All Kinds of People" },
  { id: "u9-hardworking", word: "hardworking", type: "adjective", meaningEn: "Working with great effort", meaningAr: "مجتهد", example: "She's a hardworking student.", image: img("photo-1585661417298-8236a5f449aa"), category: "9 - All Kinds of People" },
  { id: "u9-honest", word: "honest", type: "adjective", meaningEn: "Truthful and trustworthy", meaningAr: "صادق", example: "I appreciate your honest answer.", image: vec("1739804242246-f2b2ad9d18fa"), category: "9 - All Kinds of People" },
  { id: "u9-kind", word: "kind", type: "adjective", meaningEn: "Caring and helpful to others", meaningAr: "لطيف / طيّب", example: "She's so kind to everyone.", image: img("photo-1593634804965-0394d1324bc4"), category: "9 - All Kinds of People" },
  { id: "u9-lazy", word: "lazy", type: "adjective", meaningEn: "Not wanting to work or be active", meaningAr: "كسول", example: "Don't be lazy! Get up and help.", image: img("photo-1674560024785-438b51fad258"), category: "9 - All Kinds of People" },
  { id: "u9-optimistic", word: "optimistic", type: "adjective", meaningEn: "Expecting good things to happen", meaningAr: "متفائل", example: "She's optimistic about the future.", image: img("photo-1583264277168-58ceba4b84e7"), category: "9 - All Kinds of People" },
  { id: "u9-patient", word: "patient", type: "adjective", meaningEn: "Able to wait calmly", meaningAr: "صبور", example: "Be patient; the train is coming.", image: img("photo-1611834422006-f5c6cae90cc1"), category: "9 - All Kinds of People" },
  { id: "u9-persuasive", word: "persuasive", type: "adjective", meaningEn: "Able to convince others", meaningAr: "مُقنع", example: "He's a very persuasive speaker.", image: img("photo-1758519289152-d64650d13c7d"), category: "9 - All Kinds of People" },
  { id: "u9-pessimistic", word: "pessimistic", type: "adjective", meaningEn: "Expecting bad things to happen", meaningAr: "متشائم", example: "Don't be so pessimistic about the trip.", image: img("photo-1606103836293-0a063ee20566"), category: "9 - All Kinds of People" },
  { id: "u9-polite", word: "polite", type: "adjective", meaningEn: "Showing good manners", meaningAr: "مؤدب", example: "Always be polite to others.", image: img("photo-1655961929028-dd144f89de6c"), category: "9 - All Kinds of People" },
  { id: "u9-quiet", word: "quiet", type: "adjective", meaningEn: "Not making much noise", meaningAr: "هادئ", example: "Please be quiet in the library.", image: vec("1776244476849-4f672bc9a13c"), category: "9 - All Kinds of People" },
  { id: "u9-reliable", word: "reliable", type: "adjective", meaningEn: "Can be trusted; dependable", meaningAr: "موثوق", example: "He's a reliable friend.", image: vec("1761076906837-2f13922739bc"), category: "9 - All Kinds of People" },
  { id: "u9-rude", word: "rude", type: "adjective", meaningEn: "Showing bad manners", meaningAr: "وقح / فظ", example: "It's rude to interrupt people.", image: img("photo-1529323871863-75303b5737ec"), category: "9 - All Kinds of People" },
  { id: "u9-selfish", word: "selfish", type: "adjective", meaningEn: "Caring only about yourself", meaningAr: "أناني", example: "Don't be selfish; share with your sister.", image: selfishImg, category: "9 - All Kinds of People" },
  { id: "u9-serious", word: "serious", type: "adjective", meaningEn: "Not joking; thoughtful", meaningAr: "جاد", example: "He gave me a serious look.", image: seriousImg, category: "9 - All Kinds of People" },
  { id: "u9-silly", word: "silly", type: "adjective", meaningEn: "Foolish or playful", meaningAr: "سخيف / مرح", example: "Stop being silly!", image: sillyImg, category: "9 - All Kinds of People" },
  { id: "u9-talkative", word: "talkative", type: "adjective", meaningEn: "Liking to talk a lot", meaningAr: "كثير الكلام / ثرثار", example: "My sister is very talkative.", image: talkativeImg, category: "9 - All Kinds of People" },
  { id: "u9-typical", word: "typical", type: "adjective", meaningEn: "Showing the usual qualities", meaningAr: "نموذجي / معتاد", example: "It's a typical sunny day in summer.", image: typicalImg, category: "9 - All Kinds of People" },
  { id: "u9-unreliable", word: "unreliable", type: "adjective", meaningEn: "Cannot be trusted", meaningAr: "غير موثوق", example: "He's unreliable; he's always late.", image: unreliableImg, category: "9 - All Kinds of People" },
  { id: "u9-give-directions", word: "give directions", type: "expression", meaningEn: "To tell someone how to get somewhere", meaningAr: "يُعطي إرشادات / اتجاهات", example: "Can you give me directions to the hotel?", image: giveDirectionsImg, category: "9 - All Kinds of People" },
  { id: "u9-hail-taxi", word: "hail a taxi", type: "expression", meaningEn: "To signal a taxi to stop", meaningAr: "يستوقف سيارة أجرة", example: "Let's hail a taxi to the airport.", image: hailTaxiImg, category: "9 - All Kinds of People" },
  { id: "u9-hand-out", word: "hand out", type: "expression", meaningEn: "To give to many people", meaningAr: "يوزّع", example: "He handed out flyers downtown.", image: handOutImg, category: "9 - All Kinds of People" },
  { id: "u9-on-duty", word: "on duty", type: "expression", meaningEn: "Working at one's job", meaningAr: "في العمل / على رأس العمل", example: "The doctor is on duty tonight.", image: onDutyImg, category: "9 - All Kinds of People" },
  { id: "u9-real-treat", word: "a real treat", type: "expression", meaningEn: "Something especially enjoyable", meaningAr: "شيء ممتع حقاً", example: "Going to the concert was a real treat.", image: realTreatImg, category: "9 - All Kinds of People" },
  { id: "u9-i-mean", word: "I mean", type: "expression", meaningEn: "Used to clarify what was just said", meaningAr: "أقصد / يعني", example: "I mean, it's not that bad.", image: iMeanImg, category: "9 - All Kinds of People" },
  { id: "u9-of-course", word: "Of course", type: "expression", meaningEn: "Certainly; naturally", meaningAr: "بالطبع", example: "Of course I'll help you.", image: ofCourseImg, category: "9 - All Kinds of People" },

  // ============================================================
  // UNIT 10 — Who Used My Toothpaste?
  // ============================================================
  { id: "u10-complaint", word: "complaint", type: "noun", meaningEn: "An expression of dissatisfaction", meaningAr: "شكوى", example: "She filed a complaint about the noise.", image: complaintImg, category: "10 - Who Used My Toothpaste?" },
  { id: "u10-dishwashing-liquid", word: "dishwashing liquid", type: "noun", meaningEn: "Soap for washing dishes", meaningAr: "سائل غسيل الأطباق", example: "We're out of dishwashing liquid.", image: dishwashingImg, category: "10 - Who Used My Toothpaste?" },
  { id: "u10-hairbrush", word: "hairbrush", type: "noun", meaningEn: "A brush for styling hair", meaningAr: "فرشاة شعر", example: "She used a hairbrush before school.", image: hairbrushImg, category: "10 - Who Used My Toothpaste?" },
  { id: "u10-hair-dryer", word: "hair dryer", type: "noun", meaningEn: "A device that blows hot air to dry hair", meaningAr: "مجفف شعر", example: "She dried her hair with a hair dryer.", image: hairDryerImg, category: "10 - Who Used My Toothpaste?" },
  { id: "u10-mess", word: "mess", type: "noun", meaningEn: "A state of disorder or untidiness", meaningAr: "فوضى", example: "Your room is such a mess!", image: messImg, category: "10 - Who Used My Toothpaste?" },
  { id: "u10-mirror", word: "mirror", type: "noun", meaningEn: "A reflective surface", meaningAr: "مرآة", example: "She looked at herself in the mirror.", image: mirrorImg, category: "10 - Who Used My Toothpaste?" },
  { id: "u10-nail-polish", word: "nail polish", type: "noun", meaningEn: "Colored coating for fingernails", meaningAr: "طلاء أظافر", example: "She put on red nail polish.", image: nailPolishImg, category: "10 - Who Used My Toothpaste?" },
  { id: "u10-nephew", word: "nephew", type: "noun", meaningEn: "Your brother's or sister's son", meaningAr: "ابن الأخ / ابن الأخت", example: "My nephew is five years old.", image: nephewImg, category: "10 - Who Used My Toothpaste?" },
  { id: "u10-scissors", word: "scissors", type: "noun", meaningEn: "A cutting tool with two blades", meaningAr: "مقص", example: "Cut the paper with scissors.", image: scissorsImg, category: "10 - Who Used My Toothpaste?" },
  { id: "u10-shampoo", word: "shampoo", type: "noun", meaningEn: "Soap for washing hair", meaningAr: "شامبو", example: "I need to buy more shampoo.", image: shampooImg, category: "10 - Who Used My Toothpaste?" },
  { id: "u10-toothpaste", word: "toothpaste", type: "noun", meaningEn: "Paste used to clean teeth", meaningAr: "معجون أسنان", example: "Don't forget to use toothpaste.", image: toothpasteImg, category: "10 - Who Used My Toothpaste?" },
  { id: "u10-annoy", word: "annoy", type: "verb", meaningEn: "To make someone slightly angry", meaningAr: "يُزعج", example: "Stop annoying your sister!", image: annoyImg, category: "10 - Who Used My Toothpaste?" },
  { id: "u10-avoid", word: "avoid", type: "verb", meaningEn: "To stay away from", meaningAr: "يتجنّب", example: "Try to avoid junk food.", image: avoidImg, category: "10 - Who Used My Toothpaste?" },
  { id: "u10-borrow", word: "borrow", type: "verb", meaningEn: "To take something temporarily", meaningAr: "يستعير", example: "Can I borrow your pen?", image: borrowImg, category: "10 - Who Used My Toothpaste?" },
  { id: "u10-feed", word: "feed", type: "verb", meaningEn: "To give food to", meaningAr: "يُطعم", example: "Don't forget to feed the cat.", image: feedImg, category: "10 - Who Used My Toothpaste?" },
  { id: "u10-finish", word: "finish", type: "verb", meaningEn: "To complete something", meaningAr: "يُنهي", example: "Please finish your homework.", image: finishImg, category: "10 - Who Used My Toothpaste?" },
  { id: "u10-imagine", word: "imagine", type: "verb", meaningEn: "To form a picture in your mind", meaningAr: "يتخيّل", example: "Imagine you're on a beach.", image: imagineImg, category: "10 - Who Used My Toothpaste?" },
  { id: "u10-irritate", word: "irritate", type: "verb", meaningEn: "To annoy or make uncomfortable", meaningAr: "يُهيّج / يُزعج", example: "Loud music irritates me.", image: irritateImg, category: "10 - Who Used My Toothpaste?" },
  { id: "u10-mind", word: "mind", type: "verb", meaningEn: "To object or be bothered by", meaningAr: "يمانع", example: "Do you mind if I sit here?", image: mindImg, category: "10 - Who Used My Toothpaste?" },
  { id: "u10-splash", word: "splash", type: "verb", meaningEn: "To scatter liquid", meaningAr: "يرشّ / يبلّل", example: "The kids splash water in the pool.", image: splashImg, category: "10 - Who Used My Toothpaste?" },
  { id: "u10-stand", word: "stand", type: "verb", meaningEn: "To tolerate something", meaningAr: "يتحمّل", example: "I can't stand the noise.", image: standImg, category: "10 - Who Used My Toothpaste?" },
  { id: "u10-suggest", word: "suggest", type: "verb", meaningEn: "To propose an idea", meaningAr: "يقترح", example: "I suggest we leave early.", image: suggestImg, category: "10 - Who Used My Toothpaste?" },
  { id: "u10-blow-up", word: "blow up", type: "verb", meaningEn: "To explode or inflate", meaningAr: "ينفجر / ينفخ", example: "Let's blow up the balloons.", image: blowUpImg, category: "10 - Who Used My Toothpaste?" },
  { id: "u10-clean-up", word: "clean up", type: "verb", meaningEn: "To make tidy and clean", meaningAr: "ينظّف", example: "Please clean up your room.", image: cleanUpImg, category: "10 - Who Used My Toothpaste?" },
  { id: "u10-give-back", word: "give back", type: "verb", meaningEn: "To return something", meaningAr: "يُعيد", example: "Give back my book, please.", image: giveBackImg, category: "10 - Who Used My Toothpaste?" },
  { id: "u10-give-up", word: "give up", type: "verb", meaningEn: "To stop trying", meaningAr: "يستسلم", example: "Don't give up! Keep trying.", image: giveUpImg, category: "10 - Who Used My Toothpaste?" },
  { id: "u10-mess-up", word: "mess up", type: "verb", meaningEn: "To make a mistake or cause disorder", meaningAr: "يُفسد / يُخطئ", example: "I messed up the recipe.", image: messUpImg, category: "10 - Who Used My Toothpaste?" },
  { id: "u10-put-away", word: "put away", type: "verb", meaningEn: "To store in the proper place", meaningAr: "يضع في مكانه", example: "Put away your toys.", image: putAwayImg, category: "10 - Who Used My Toothpaste?" },
  { id: "u10-put-back", word: "put back", type: "verb", meaningEn: "To return to original position", meaningAr: "يُرجع إلى مكانه", example: "Put the book back on the shelf.", image: putBackImg, category: "10 - Who Used My Toothpaste?" },
  { id: "u10-take-over", word: "take over", type: "verb", meaningEn: "To take control of something", meaningAr: "يتولّى المسؤولية", example: "She'll take over the project next week.", image: takeOverImg, category: "10 - Who Used My Toothpaste?" },
  { id: "u10-turn-down", word: "turn down", type: "verb", meaningEn: "To lower the volume / refuse", meaningAr: "يخفض الصوت / يرفض", example: "Turn down the music, please.", image: turnDownImg, category: "10 - Who Used My Toothpaste?" },
  { id: "u10-turn-off", word: "turn off", type: "verb", meaningEn: "To stop a device from working", meaningAr: "يطفئ", example: "Turn off the lights when you leave.", image: img("photo-1507473885765-e6ed057ab6fe"), category: "10 - Who Used My Toothpaste?" },
  { id: "u10-dirty", word: "dirty", type: "adjective", meaningEn: "Not clean", meaningAr: "متّسخ", example: "Your shoes are dirty.", image: dirtyImg, category: "10 - Who Used My Toothpaste?" },
  { id: "u10-already", word: "already", type: "adverb", meaningEn: "Before now or before a certain time", meaningAr: "بالفعل / مسبقاً", example: "I've already finished my homework.", image: img("photo-1434030216411-0b793f4b4173"), category: "10 - Who Used My Toothpaste?" },
  { id: "u10-just", word: "just", type: "adverb", meaningEn: "A very short time ago", meaningAr: "للتو / منذ قليل", example: "I just got home.", image: img("photo-1495364141860-b0d03eccd065"), category: "10 - Who Used My Toothpaste?" },
  { id: "u10-yet", word: "yet", type: "adverb", meaningEn: "Up to now (in questions/negatives)", meaningAr: "حتى الآن / بعد", example: "Have you finished yet?", image: img("photo-1495364141860-b0d03eccd065"), category: "10 - Who Used My Toothpaste?" },
  { id: "u10-make-at-home", word: "make oneself at home", type: "expression", meaningEn: "To feel comfortable as if in your own home", meaningAr: "تصرّف كأنك في منزلك", example: "Please come in and make yourself at home.", image: img("photo-1493809842364-78817add7ffb"), category: "10 - Who Used My Toothpaste?" },
  { id: "u10-wait-in-line", word: "wait in line", type: "expression", meaningEn: "To stand in a line waiting your turn", meaningAr: "ينتظر في الصف", example: "We had to wait in line for an hour.", image: img("photo-1556742044-3c52d6e88c62"), category: "10 - Who Used My Toothpaste?" },
  { id: "u10-at-long-last", word: "At long last!", type: "expression", meaningEn: "Finally, after a long wait", meaningAr: "أخيراً!", example: "At long last, the rain has stopped.", image: img("photo-1469474968028-56623f02e42e"), category: "10 - Who Used My Toothpaste?" },
  { id: "u10-bit-too-much", word: "That's a bit too much.", type: "expression", meaningEn: "That's excessive", meaningAr: "هذا أكثر من اللازم", example: "Five hours of TV? That's a bit too much.", image: img("photo-1499617471673-c4ebd6a3b62f"), category: "10 - Who Used My Toothpaste?" },

  // ============================================================
  // UNIT 11 — Making Choices
  // ============================================================
  { id: "u11-airshow", word: "airshow", type: "noun", meaningEn: "A public display of flying aircraft", meaningAr: "عرض طيران", example: "The airshow was amazing to watch.", image: airshowImg, category: "11 - Making Choices" },
  { id: "u11-benefit", word: "benefit", type: "noun", meaningEn: "An advantage or good result", meaningAr: "فائدة", example: "Exercise has many health benefits.", image: img("photo-1517836357463-d25dfeac3438"), category: "11 - Making Choices" },
  { id: "u11-choice", word: "choice", type: "noun", meaningEn: "A decision between options", meaningAr: "اختيار", example: "You have to make a choice.", image: img("photo-1488998427799-e3362cec87c3"), category: "11 - Making Choices" },
  { id: "u11-conservationist", word: "conservationist", type: "noun", meaningEn: "Someone who protects nature", meaningAr: "مدافع عن البيئة", example: "She's a famous conservationist.", image: conservationistImg, category: "11 - Making Choices" },
  { id: "u11-environment", word: "environment", type: "noun", meaningEn: "The natural world around us", meaningAr: "البيئة", example: "We must protect the environment.", image: img("photo-1441974231531-c6227db76b6e"), category: "11 - Making Choices" },
  { id: "u11-farmer", word: "farmer", type: "noun", meaningEn: "Someone who works on a farm", meaningAr: "مزارع", example: "The farmer grows vegetables.", image: farmerImg, category: "11 - Making Choices" },
  { id: "u11-graduation", word: "graduation", type: "noun", meaningEn: "Ceremony of completing studies", meaningAr: "حفل التخرّج", example: "Her graduation is next week.", image: graduationImg, category: "11 - Making Choices" },
  { id: "u11-pollution", word: "pollution", type: "noun", meaningEn: "Harmful substances in the environment", meaningAr: "تلوّث", example: "Air pollution is a big problem.", image: pollutionImg, category: "11 - Making Choices" },
  { id: "u11-preference", word: "preference", type: "noun", meaningEn: "Liking one thing more than another", meaningAr: "تفضيل", example: "Do you have a preference for tea or coffee?", image: img("photo-1495474472287-4d71bcdd2085"), category: "11 - Making Choices" },
  { id: "u11-resort", word: "resort", type: "noun", meaningEn: "A place for vacations and relaxation", meaningAr: "منتجع", example: "We stayed at a beach resort.", image: resortImg, category: "11 - Making Choices" },
  { id: "u11-route", word: "route", type: "noun", meaningEn: "The way from one place to another", meaningAr: "طريق / مسار", example: "Take the shortest route home.", image: routeImg, category: "11 - Making Choices" },
  { id: "u11-scholarship", word: "scholarship", type: "noun", meaningEn: "Financial help for education", meaningAr: "منحة دراسية", example: "She got a scholarship to study abroad.", image: img("photo-1523050854058-8df90110c9f1"), category: "11 - Making Choices" },
  { id: "u11-subject", word: "subject", type: "noun", meaningEn: "A topic of study", meaningAr: "مادة دراسية / موضوع", example: "Math is my favorite subject.", image: subjectImg, category: "11 - Making Choices" },
  { id: "u11-care", word: "care", type: "verb", meaningEn: "To feel concern or interest", meaningAr: "يهتم", example: "I care about my family.", image: careImg, category: "11 - Making Choices" },
  { id: "u11-fail", word: "fail", type: "verb", meaningEn: "To not succeed", meaningAr: "يفشل / يرسب", example: "Don't be afraid to fail.", image: img("photo-1499209974431-9dddcece7f88"), category: "11 - Making Choices" },
  { id: "u11-fit-in", word: "fit in", type: "verb", meaningEn: "To feel accepted in a group", meaningAr: "ينسجم / يندمج", example: "She fits in well at her new school.", image: fitInImg, category: "11 - Making Choices" },
  { id: "u11-generate", word: "generate", type: "verb", meaningEn: "To produce or create", meaningAr: "يولّد / يُنتج", example: "Solar panels generate electricity.", image: img("photo-1466611653911-95081537e5b7"), category: "11 - Making Choices" },
  { id: "u11-graduate", word: "graduate", type: "verb", meaningEn: "To complete studies and earn a degree", meaningAr: "يتخرّج", example: "She'll graduate next June.", image: graduateImg, category: "11 - Making Choices" },
  { id: "u11-interfere", word: "interfere", type: "verb", meaningEn: "To get involved without being asked", meaningAr: "يتدخّل", example: "Don't interfere in their argument.", image: img("photo-1573497019940-1c28c88b4f3e"), category: "11 - Making Choices" },
  { id: "u11-involve", word: "involve", type: "verb", meaningEn: "To include as a necessary part", meaningAr: "يتضمّن / يشمل", example: "The job involves a lot of travel.", image: img("photo-1454165804606-c3d57bc86b40"), category: "11 - Making Choices" },
  { id: "u11-pass-test", word: "pass (a test)", type: "verb", meaningEn: "To succeed in a test", meaningAr: "ينجح في اختبار", example: "I hope to pass the math test.", image: img("photo-1434030216411-0b793f4b4173"), category: "11 - Making Choices" },
  { id: "u11-study", word: "study", type: "verb", meaningEn: "To learn about a subject", meaningAr: "يدرس", example: "She studies every night.", image: studyImg, category: "11 - Making Choices" },
  { id: "u11-fit-in-suit", word: "fit (someone)", type: "verb", meaningEn: "To look good on a person; to suit them", meaningAr: "يليق على الشخص", example: "That dress really fits her.", image: fitInImg, category: "11 - Making Choices" },
  { id: "u11-scenic", word: "scenic", type: "adjective", meaningEn: "Having beautiful natural views", meaningAr: "ذو مناظر خلّابة", example: "We took the scenic route home.", image: scenicImg, category: "11 - Making Choices" },
  { id: "u11-be-against", word: "be against", type: "expression", meaningEn: "To oppose something", meaningAr: "يعارض", example: "I'm against cutting down trees.", image: img("photo-1441974231531-c6227db76b6e"), category: "11 - Making Choices" },
  { id: "u11-feel-like", word: "feel like (doing)", type: "expression", meaningEn: "To want to do something", meaningAr: "يرغب في فعل شيء", example: "I feel like going for a walk.", image: img("photo-1469854523086-cc02fe5d8800"), category: "11 - Making Choices" },
  { id: "u11-get-chance", word: "get a chance", type: "expression", meaningEn: "To have an opportunity", meaningAr: "يحصل على فرصة", example: "I never got a chance to speak.", image: img("photo-1469474968028-56623f02e42e"), category: "11 - Making Choices" },
  { id: "u11-get-caught", word: "get caught", type: "expression", meaningEn: "To be discovered doing something wrong", meaningAr: "يُمسك متلبساً", example: "He got caught cheating on the exam.", image: img("photo-1517242810446-cc8951b2be40"), category: "11 - Making Choices" },
  { id: "u11-would-rather", word: "would rather", type: "expression", meaningEn: "To prefer to", meaningAr: "يُفضّل أن", example: "I would rather stay home tonight.", image: img("photo-1495474472287-4d71bcdd2085"), category: "11 - Making Choices" },
  { id: "u11-seems-to-me", word: "It seems to me", type: "expression", meaningEn: "In my opinion", meaningAr: "يبدو لي", example: "It seems to me that he's right.", image: img("photo-1488998427799-e3362cec87c3"), category: "11 - Making Choices" },
  { id: "u11-make-up-mind", word: "make up your mind", type: "expression", meaningEn: "To make a final decision", meaningAr: "يحسم قراره", example: "Hurry up and make up your mind!", image: img("photo-1488998427799-e3362cec87c3"), category: "11 - Making Choices" },
  { id: "u11-up-in-the-air", word: "up in the air", type: "expression", meaningEn: "Not yet decided", meaningAr: "غير محسوم بعد", example: "Our travel plans are still up in the air.", image: img("photo-1500382017468-9049fed747ef"), category: "11 - Making Choices" },

  // ============================================================
  // UNIT 12 — Culture Shock
  // ============================================================
  { id: "u12-break", word: "break", type: "noun", meaningEn: "A short rest or pause", meaningAr: "استراحة", example: "Let's take a short break.", image: img("photo-1495474472287-4d71bcdd2085"), category: "12 - Culture Shock" },
  { id: "u12-chopsticks", word: "chopsticks", type: "noun", meaningEn: "Pair of sticks used to eat in Asian cultures", meaningAr: "عيدان الطعام", example: "Can you eat with chopsticks?", image: img("photo-1674916287402-33dec2d60cf6"), category: "12 - Culture Shock" },
  { id: "u12-custom", word: "custom", type: "noun", meaningEn: "A traditional way of behaving", meaningAr: "عادة / تقليد", example: "It's a custom to remove your shoes here.", image: img("photo-1528360983277-13d401cdc186"), category: "12 - Culture Shock" },
  { id: "u12-dust", word: "dust", type: "noun", meaningEn: "Fine particles of dirt", meaningAr: "غبار", example: "The shelves are covered in dust.", image: img("photo-1581578731548-c64695cc6952"), category: "12 - Culture Shock" },
  { id: "u12-graduate", word: "graduate", type: "noun", meaningEn: "Someone who completed a degree", meaningAr: "خريج", example: "She's a recent graduate of the university.", image: img("photo-1523050854058-8df90110c9f1"), category: "12 - Culture Shock" },
  { id: "u12-guest", word: "guest", type: "noun", meaningEn: "A person invited to someone's home", meaningAr: "ضيف", example: "We have guests coming for dinner.", image: img("photo-1493809842364-78817add7ffb"), category: "12 - Culture Shock" },
  { id: "u12-host", word: "host", type: "noun", meaningEn: "A person who receives guests", meaningAr: "مُضيف", example: "She's a wonderful host.", image: img("photo-1504703395950-b89145a5425b"), category: "12 - Culture Shock" },
  { id: "u12-impression", word: "impression", type: "noun", meaningEn: "An idea or feeling about someone/something", meaningAr: "انطباع", example: "First impressions are important.", image: img("photo-1521791136064-7986c2920216"), category: "12 - Culture Shock" },
  { id: "u12-lawyer", word: "lawyer", type: "noun", meaningEn: "A person who practices law", meaningAr: "محامٍ", example: "She wants to be a lawyer.", image: img("photo-1589994965851-a8f479c573a9"), category: "12 - Culture Shock" },
  { id: "u12-mud", word: "mud", type: "noun", meaningEn: "Wet soft earth", meaningAr: "طين / وحل", example: "The kids played in the mud.", image: img("photo-1568051243851-f9b136146e97"), category: "12 - Culture Shock" },
  { id: "u12-pocket", word: "pocket", type: "noun", meaningEn: "A small bag sewn into clothing", meaningAr: "جيب", example: "He put the keys in his pocket.", image: img("photo-1542838132-92c53300491e"), category: "12 - Culture Shock" },
  { id: "u12-porter", word: "porter", type: "noun", meaningEn: "A person who carries luggage", meaningAr: "حمّال أمتعة", example: "The porter helped us with our bags.", image: img("photo-1565026057447-bc90a3dceb87"), category: "12 - Culture Shock" },
  { id: "u12-shock", word: "shock", type: "noun", meaningEn: "A sudden upsetting surprise", meaningAr: "صدمة", example: "The news came as a shock.", image: img("photo-1499617471673-c4ebd6a3b62f"), category: "12 - Culture Shock" },
  { id: "u12-surname", word: "surname", type: "noun", meaningEn: "Family name; last name", meaningAr: "اسم العائلة", example: "Please write your surname here.", image: img("photo-1554224155-6726b3ff858f"), category: "12 - Culture Shock" },
  { id: "u12-tip-noun", word: "tip", type: "noun", meaningEn: "Money given for service / helpful advice", meaningAr: "إكرامية / نصيحة", example: "I left a tip for the waiter.", image: img("photo-1554224155-6726b3ff858f"), category: "12 - Culture Shock" },
  { id: "u12-topic", word: "topic", type: "noun", meaningEn: "A subject discussed", meaningAr: "موضوع للنقاش", example: "Let's change the topic.", image: img("photo-1573497019940-1c28c88b4f3e"), category: "12 - Culture Shock" },
  { id: "u12-adjust", word: "adjust", type: "verb", meaningEn: "To change to fit a new situation", meaningAr: "يتأقلم / يضبط", example: "It takes time to adjust to a new country.", image: img("photo-1469854523086-cc02fe5d8800"), category: "12 - Culture Shock" },
  { id: "u12-allow", word: "allow", type: "verb", meaningEn: "To give permission", meaningAr: "يسمح", example: "Pets are not allowed here.", image: img("photo-1503376780353-7e6692767b70"), category: "12 - Culture Shock" },
  { id: "u12-block", word: "block", type: "verb", meaningEn: "To stop something from passing", meaningAr: "يسد / يعيق", example: "A car is blocking the road.", image: img("photo-1502920917128-1aa500764cbd"), category: "12 - Culture Shock" },
  { id: "u12-bump-into", word: "bump (into)", type: "verb", meaningEn: "To meet someone unexpectedly", meaningAr: "يصادف / يلتقي مصادفة", example: "I bumped into an old friend today.", image: img("photo-1521791136064-7986c2920216"), category: "12 - Culture Shock" },
  { id: "u12-comment", word: "comment", type: "verb", meaningEn: "To express an opinion", meaningAr: "يعلّق", example: "She commented on the new design.", image: img("photo-1573497019940-1c28c88b4f3e"), category: "12 - Culture Shock" },
  { id: "u12-exchange", word: "exchange", type: "verb", meaningEn: "To give one thing and receive another", meaningAr: "يتبادل", example: "We exchanged gifts at Christmas.", image: img("photo-1556742049-0cfed4f6a45d"), category: "12 - Culture Shock" },
  { id: "u12-expect", word: "expect", type: "verb", meaningEn: "To think something will happen", meaningAr: "يتوقّع", example: "I expect to arrive at noon.", image: img("photo-1493836512294-502baa1986e2"), category: "12 - Culture Shock" },
  { id: "u12-handle", word: "handle", type: "verb", meaningEn: "To deal with a situation", meaningAr: "يتعامل مع", example: "She can handle any problem.", image: img("photo-1454165804606-c3d57bc86b40"), category: "12 - Culture Shock" },
  { id: "u12-manage", word: "manage", type: "verb", meaningEn: "To succeed in doing something difficult", meaningAr: "يتدبّر / ينجح في", example: "I managed to finish on time.", image: img("photo-1521737711867-e3b97375f902"), category: "12 - Culture Shock" },
  { id: "u12-remove", word: "remove", type: "verb", meaningEn: "To take away", meaningAr: "يُزيل", example: "Please remove your shoes.", image: img("photo-1528360983277-13d401cdc186"), category: "12 - Culture Shock" },
  { id: "u12-rest", word: "rest", type: "verb", meaningEn: "To stop activity to relax", meaningAr: "يستريح", example: "You should rest after exercise.", image: img("photo-1495474472287-4d71bcdd2085"), category: "12 - Culture Shock" },
  { id: "u12-rush", word: "rush", type: "verb", meaningEn: "To do something very quickly", meaningAr: "يُسرع / يستعجل", example: "Don't rush; we have time.", image: img("photo-1518288774672-b94e808873ff"), category: "12 - Culture Shock" },
  { id: "u12-spear", word: "spear", type: "verb", meaningEn: "To pierce with a sharp object", meaningAr: "يطعن بشيء حاد", example: "He speared the food with his fork.", image: img("photo-1584568694244-14fbdf83bd30"), category: "12 - Culture Shock" },
  { id: "u12-spread", word: "spread", type: "verb", meaningEn: "To extend over an area", meaningAr: "ينتشر / يفرد", example: "News spreads fast online.", image: img("photo-1504711434969-e33886168f5c"), category: "12 - Culture Shock" },
  { id: "u12-tip-verb", word: "tip", type: "verb", meaningEn: "To give money for a service", meaningAr: "يُعطي إكرامية", example: "Don't forget to tip the waiter.", image: img("photo-1554224155-6726b3ff858f"), category: "12 - Culture Shock" },
  { id: "u12-crowded", word: "crowded", type: "adjective", meaningEn: "Full of people", meaningAr: "مزدحم", example: "The bus was very crowded.", image: img("photo-1556742044-3c52d6e88c62"), category: "12 - Culture Shock" },
  { id: "u12-customary", word: "customary", type: "adjective", meaningEn: "Usual; following custom", meaningAr: "اعتيادي / متعارف عليه", example: "It's customary to bring a gift.", image: img("photo-1528360983277-13d401cdc186"), category: "12 - Culture Shock" },
  { id: "u12-globalized", word: "globalized", type: "adjective", meaningEn: "Connected with the whole world", meaningAr: "مُعَوْلَم", example: "We live in a globalized world.", image: img("photo-1451187580459-43490279c0fa"), category: "12 - Culture Shock" },
  { id: "u12-local", word: "local", type: "adjective", meaningEn: "From a particular nearby area", meaningAr: "محلي", example: "Try the local food.", image: img("photo-1504711434969-e33886168f5c"), category: "12 - Culture Shock" },
  { id: "u12-punctual", word: "punctual", type: "adjective", meaningEn: "On time; not late", meaningAr: "ملتزم بالمواعيد", example: "Please be punctual for the meeting.", image: img("photo-1495364141860-b0d03eccd065"), category: "12 - Culture Shock" },
  { id: "u12-relaxed", word: "relaxed", type: "adjective", meaningEn: "Calm and free from worry", meaningAr: "مسترخٍ / مرتاح", example: "She felt relaxed on the beach.", image: img("photo-1507525428034-b723cf961d3e"), category: "12 - Culture Shock" },
  { id: "u12-similar", word: "similar", type: "adjective", meaningEn: "Almost the same", meaningAr: "مشابه", example: "These two cars look similar.", image: img("photo-1492144534655-ae79c964c9d7"), category: "12 - Culture Shock" },
  { id: "u12-tricky", word: "tricky", type: "adjective", meaningEn: "Difficult to do or deal with", meaningAr: "صعب / معقّد", example: "This question is a bit tricky.", image: img("photo-1488998427799-e3362cec87c3"), category: "12 - Culture Shock" },
  { id: "u12-accidentally", word: "accidentally", type: "adverb", meaningEn: "By accident; not on purpose", meaningAr: "عن طريق الخطأ", example: "I accidentally broke the cup.", image: img("photo-1517232115160-ff93364542dd"), category: "12 - Culture Shock" },
  { id: "u12-patiently", word: "patiently", type: "adverb", meaningEn: "In a calm waiting way", meaningAr: "بصبر", example: "She waited patiently for her turn.", image: img("photo-1493836512294-502baa1986e2"), category: "12 - Culture Shock" },
  { id: "u12-advisable", word: "It's advisable to…", type: "expression", meaningEn: "It is recommended to…", meaningAr: "من المستحسن أن…", example: "It's advisable to book early.", image: img("photo-1517245386807-bb43f82c33c4"), category: "12 - Culture Shock" },
  { id: "u12-good-idea", word: "It's a good idea to…", type: "expression", meaningEn: "It is wise to…", meaningAr: "من الجيد أن…", example: "It's a good idea to study daily.", image: img("photo-1488998427799-e3362cec87c3"), category: "12 - Culture Shock" },
  { id: "u12-common-to", word: "It's common to…", type: "expression", meaningEn: "It happens often", meaningAr: "من الشائع أن…", example: "It's common to shake hands here.", image: img("photo-1521791136064-7986c2920216"), category: "12 - Culture Shock" },
  { id: "u12-not-polite", word: "It's not polite to… / It's impolite to…", type: "expression", meaningEn: "It shows bad manners", meaningAr: "ليس من المؤدب أن…", example: "It's not polite to talk with your mouth full.", image: img("photo-1504593811423-6dd665756598"), category: "12 - Culture Shock" },
  { id: "u12-polite-to", word: "It's polite to…", type: "expression", meaningEn: "It shows good manners", meaningAr: "من المؤدب أن…", example: "It's polite to say thank you.", image: img("photo-1521791136064-7986c2920216"), category: "12 - Culture Shock" },
  { id: "u12-rude-to", word: "It's rude to…", type: "expression", meaningEn: "It is impolite to…", meaningAr: "من الوقاحة أن…", example: "It's rude to point at people.", image: img("photo-1504593811423-6dd665756598"), category: "12 - Culture Shock" },
  { id: "u12-wrong-to", word: "It's wrong to…", type: "expression", meaningEn: "It is morally incorrect", meaningAr: "من الخطأ أن…", example: "It's wrong to lie to your friends.", image: img("photo-1504593811423-6dd665756598"), category: "12 - Culture Shock" },
  { id: "u12-be-sure", word: "Be sure to…", type: "expression", meaningEn: "Make certain to do…", meaningAr: "تأكد من أن…", example: "Be sure to lock the door.", image: img("photo-1517245386807-bb43f82c33c4"), category: "12 - Culture Shock" },
  { id: "u12-dont-forget", word: "Don't forget to…", type: "expression", meaningEn: "Remember to do…", meaningAr: "لا تنسَ أن…", example: "Don't forget to call me.", image: img("photo-1495364141860-b0d03eccd065"), category: "12 - Culture Shock" },
  { id: "u12-make-sure", word: "Make sure to…", type: "expression", meaningEn: "Confirm that you do…", meaningAr: "تأكد من…", example: "Make sure to bring your ID.", image: img("photo-1517245386807-bb43f82c33c4"), category: "12 - Culture Shock" },
  { id: "u12-remember-to", word: "Remember to…", type: "expression", meaningEn: "Don't forget to do…", meaningAr: "تذكّر أن…", example: "Remember to take your umbrella.", image: img("photo-1495364141860-b0d03eccd065"), category: "12 - Culture Shock" },
  { id: "u12-try-not-to", word: "Try not to…", type: "expression", meaningEn: "Make an effort to avoid", meaningAr: "حاول ألا…", example: "Try not to be late.", image: img("photo-1518288774672-b94e808873ff"), category: "12 - Culture Shock" },
  { id: "u12-try-to", word: "Try to…", type: "expression", meaningEn: "Make an effort to do…", meaningAr: "حاول أن…", example: "Try to relax.", image: img("photo-1517245386807-bb43f82c33c4"), category: "12 - Culture Shock" },
  { id: "u12-be-based", word: "be based", type: "expression", meaningEn: "To have a main location", meaningAr: "يكون مقرّه في", example: "The company is based in Tokyo.", image: img("photo-1451187580459-43490279c0fa"), category: "12 - Culture Shock" },
  { id: "u12-be-on-time", word: "be on time", type: "expression", meaningEn: "To arrive at the right time", meaningAr: "يحضر في الوقت المحدد", example: "Please be on time tomorrow.", image: img("photo-1495364141860-b0d03eccd065"), category: "12 - Culture Shock" },
  { id: "u12-stand-in-line", word: "stand in line", type: "expression", meaningEn: "To wait in a queue", meaningAr: "يقف في الصف", example: "We had to stand in line for tickets.", image: img("photo-1556742044-3c52d6e88c62"), category: "12 - Culture Shock" },
  { id: "u12-wait-your-turn", word: "wait your turn", type: "expression", meaningEn: "To wait until it's your time", meaningAr: "ينتظر دوره", example: "Please wait your turn.", image: img("photo-1493836512294-502baa1986e2"), category: "12 - Culture Shock" },
  { id: "u12-whats-it-like", word: "What's it like…?", type: "expression", meaningEn: "How is it? Used to ask description", meaningAr: "كيف هو…؟", example: "What's it like living in Japan?", image: img("photo-1528360983277-13d401cdc186"), category: "12 - Culture Shock" },
  { id: "u12-kind-of", word: "kind of", type: "expression", meaningEn: "Somewhat; a little", meaningAr: "نوعاً ما", example: "I'm kind of tired today.", image: img("photo-1499728603263-13726abce5fd"), category: "12 - Culture Shock" },
  { id: "u12-no-kidding", word: "No kidding!", type: "expression", meaningEn: "Really? That's surprising!", meaningAr: "حقاً؟! / لا تمزح!", example: "You won? No kidding!", image: img("photo-1531746020798-e6953c6e8e04"), category: "12 - Culture Shock" },
  { id: "u12-to-be-honest", word: "to be honest", type: "expression", meaningEn: "Speaking truthfully", meaningAr: "بصراحة", example: "To be honest, I don't like it.", image: img("photo-1521791055366-0d553872125f"), category: "12 - Culture Shock" },
  { id: "u12-get-hang-of", word: "to get the hang of", type: "expression", meaningEn: "To learn how to do something", meaningAr: "يتقن / يعتاد على", example: "It takes time to get the hang of driving.", image: img("photo-1542362567-b07e54358753"), category: "12 - Culture Shock" },
];

export const categories = Array.from(new Set(vocabulary.map((w) => w.category)));

export function getWordsByCategory(category: string): VocabWord[] {
  return vocabulary.filter((w) => w.category === category);
}

// Cache for dictionary audio URLs (null = checked, no audio available)
const audioCache = new Map<string, string | null>();
let currentAudio: HTMLAudioElement | null = null;

// Cache the best English voice once chosen
let bestEnglishVoice: SpeechSynthesisVoice | null = null;

function pickBestEnglishVoice(): SpeechSynthesisVoice | null {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return null;
  if (bestEnglishVoice) return bestEnglishVoice;
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;

  const englishVoices = voices.filter(v => v.lang && v.lang.toLowerCase().startsWith("en"));
  if (!englishVoices.length) return null;

  // Preference order: high-quality named voices > en-US > en-GB > any English
  const preferredNames = [
    "Google US English", "Google UK English Female", "Google UK English Male",
    "Microsoft Aria", "Microsoft Jenny", "Microsoft Guy", "Microsoft Zira", "Microsoft David",
    "Samantha", "Karen", "Daniel", "Alex", "Moira", "Tessa",
  ];
  for (const name of preferredNames) {
    const v = englishVoices.find(x => x.name.includes(name));
    if (v) { bestEnglishVoice = v; return v; }
  }
  // Prefer non-default local en-US, then en-GB, then any
  bestEnglishVoice =
    englishVoices.find(v => v.lang.toLowerCase() === "en-us" && v.localService) ||
    englishVoices.find(v => v.lang.toLowerCase() === "en-us") ||
    englishVoices.find(v => v.lang.toLowerCase() === "en-gb") ||
    englishVoices[0];
  return bestEnglishVoice;
}

// Trigger voice list load (some browsers load asynchronously)
if (typeof window !== "undefined" && "speechSynthesis" in window) {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    bestEnglishVoice = null;
    pickBestEnglishVoice();
  };
}

function fallbackSpeak(text: string, lang: string): void {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  // Force English voice — never let the browser pick Arabic for English text
  if (lang.startsWith("en")) {
    const voice = pickBestEnglishVoice();
    if (voice) {
      utter.voice = voice;
      utter.lang = voice.lang;
    } else {
      utter.lang = "en-US";
    }
  } else {
    utter.lang = lang;
  }
  utter.rate = 0.9;
  window.speechSynthesis.speak(utter);
}

function stopAll(): void {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

async function fetchDictionaryAudio(word: string, timeoutMs = 1200): Promise<string | null> {
  const key = word.toLowerCase();
  if (audioCache.has(key)) return audioCache.get(key)!;
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), timeoutMs);
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(key)}`, { signal: ctrl.signal });
    clearTimeout(timer);
    if (!res.ok) {
      audioCache.set(key, null);
      return null;
    }
    const data = await res.json();
    let audioUrl: string | null = null;
    for (const entry of data) {
      for (const ph of entry.phonetics || []) {
        if (ph.audio && typeof ph.audio === "string" && ph.audio.length > 0) {
          audioUrl = ph.audio.startsWith("//") ? `https:${ph.audio}` : ph.audio;
          break;
        }
      }
      if (audioUrl) break;
    }
    audioCache.set(key, audioUrl);
    return audioUrl;
  } catch {
    audioCache.set(key, null);
    return null;
  }
}

// Prefetch audio in the background so it's cached for instant playback later
export function prefetchAudio(text: string): void {
  const trimmed = text.trim();
  if (/^[a-zA-Z][a-zA-Z'-]*$/.test(trimmed)) {
    fetchDictionaryAudio(trimmed, 5000).catch(() => {});
  }
}

export function speakWord(text: string, lang: string = "en-US"): void {
  if (typeof window === "undefined") return;
  stopAll();

  const trimmed = text.trim();
  const isSingleEnglishWord = /^[a-zA-Z][a-zA-Z'-]*$/.test(trimmed) && lang.startsWith("en");

  if (!isSingleEnglishWord) {
    fallbackSpeak(text, lang);
    return;
  }

  const key = trimmed.toLowerCase();
  // If cached, play instantly
  if (audioCache.has(key)) {
    const url = audioCache.get(key)!;
    if (url) {
      const audio = new Audio(url);
      currentAudio = audio;
      audio.play().catch(() => fallbackSpeak(text, lang));
    } else {
      fallbackSpeak(text, lang);
    }
    return;
  }

  // Not cached: speak via Web Speech immediately so user hears something now,
  // and prefetch dictionary audio for next time.
  fallbackSpeak(text, lang);
  fetchDictionaryAudio(trimmed, 5000).catch(() => {});
}
