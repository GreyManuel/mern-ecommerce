export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "speaker", label: "Speakers" },
      { id: "piano", label: "Piano" },
      { id: "microphone", label: "Microphones" },
      { id: "mixer", label: "Mixers" },
      { id: "amplifier", label: "Amplifiers" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "yamaha", label: "Yamaha" },
      { id: "peavey", label: "Peavey" },
      { id: "casio", label: "Casio" },
      { id: "roland", label: "Roland" },
      { id: "kurzweil", label: "Kurzweil" },
      { id: "h&m", label: "H&M" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "All Products",
    path: "/shop/listing",
  },
  {
    id: "speaker",
    label: "Speakers",
    path: "/shop/listing",
  },
  {
    id: "piano",
    label: "Piano",
    path: "/shop/listing",
  },
  {
    id: "microphone",
    label: "Microphones",
    path: "/shop/listing",
  },
  {
    id: "mixer",
    label: "Mixers",
    path: "/shop/listing",
  },
  {
    id: "amplifier",
    label: "Amplifiers",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  men: "Men",
  piano: "Piano",
  kids: "Kids",
  accessories: "Accessories",
  footwear: "Footwear",
};

export const brandOptionsMap = {
  yamaha: "Yamaha",
  peavey: "Peavey",
  casio: "Casio",
  roland: "Roland",
  kurzweil: "Kurzweil",
  "h&m": "H&M",
};

export const filterOptions = {
  category: [
    { id: "speaker", label: "Speakers" },
    { id: "piano", label: "Piano" },
    { id: "microphone", label: "Microphones" },
    { id: "mixer", label: "Mixers" },
    { id: "amplifier", label: "Amplifiers" },
  ],
  brand: [
    { id: "yamaha", label: "Yamaha" },
    { id: "peavey", label: "Peavey" },
    { id: "casio", label: "Casio" },
    { id: "roland", label: "Roland" },
    { id: "kurzweil", label: "Kurzweil" },
    { id: "h&m", label: "H&M" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
