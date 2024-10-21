import biologist from "/src/assets//biologist-forest.jpg";
import plantCare from "/src/assets/lifestyle-ecofriendly-people.jpg";
import agriConsultant from "/src/assets/young-farmer-taking-care-his-business.jpg";

import fertilizers from "/src/assets/fertilizers.jpg";
import pesticides from "/src/assets/pesticides.jpg";
import irrigation from "/src/assets/irrigation.jpg";
import seeds from "/src/assets/seeds.jpg";
import tools from "/src/assets/tools.jpg";

export const services = [
  {
    image: biologist,
    title: "افحص نباتك",
    description:
      "تتيح لك هذه الخدمة فحص حالة نباتاتك ومعرفة احتياجاتها. من خلال تقييم صحة النبات ومراقبة الأعراض المحتملة، يمكننا مساعدتك في اتخاذ الخطوات اللازمة لضمان نمو صحي وزيادة الإنتاجية.",
  },
  {
    image: plantCare,
    title: "المتابعة الدورية للنبات",
    description:
      "نقدم خدمة المتابعة الدورية للنباتات لمساعدتك في مراقبة نموها وتطورها بشكل مستمر. يتضمن ذلك فحوصات منتظمة وتقديم نصائح حول الري والتسميد والعناية العامة لضمان أفضل النتائج.",
  },
  {
    image: agriConsultant,
    title: "تواصل مع مهندس",
    description:
      "من خلال هذه الخدمة، يمكنك التواصل مباشرة مع مهندس زراعي محترف للحصول على استشارات مخصصة. سواء كنت بحاجة إلى مساعدة في تحسين تقنيات الزراعة أو معالجة مشكلات معينة، فنحن هنا لدعمك بخبرة متخصصة.",
  },
];

export const shoppingCategory = [
  {
    image: fertilizers,
    title: "اسمدة",
    description:
      "تقدم هذه الخدمة مجموعة من الأسمدة لتعزيز نمو النباتات وضمان إنتاجية عالية.",
    path: "/Fertilizers",
  },
  {
    image: pesticides,
    title: "مبيدات",
    description: "نقدم مبيدات فعالة لحماية محاصيلك من الآفات والأمراض.",
    path: "/Pesticides",
  },
  {
    image: irrigation,
    title: "شبكات رى",
    description: "حلول متكاملة لشبكات الري لضمان توزيع الماء بشكل فعال.",
    path: "/Irrigation",
  },
  {
    image: seeds,
    title: "بذور",
    description: "توفر أفضل أنواع البذور لزراعة محاصيل متنوعة وذات جودة عالية.",
    path: "/Seeds",
  },
  {
    image: tools,
    title: "ادوات زراعية",
    description:
      "مجموعة متنوعة من الأدوات الزراعية التي تسهل عليك العمل في الأرض.",
    path: "/Tools",
  },
];

export const suppliers = [
  {
    name: "أحمد محمد",
    contact: "01012345678",
    area: "القاهرة الكبرى",
  },
  {
    name: "محمد علي",
    contact: "01234567890",
    area: "الإسكندرية",
  },
  {
    name: "خالد حسن",
    contact: "01122334455",
    area: "الدلتا",
  },
];
