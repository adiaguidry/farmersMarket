import afro from "../images/afro.png";
import red from "../images/red.png";
import burnett from "../images/burnett.png";
import hat from "../images/hat.png";
import bread from "../images/bread.png";
import blonde from "../images/blonde.png";

const initialState = {
  farms: [
    {
      name: "Guidry Farm",
      location: "Oceanside",
      lat: 33.198129,
      long: -117.379124,
      produce: [
        {
          id: 104573112,
          text: "Mangos"
        },
        {
          id: 1034731,
          text: "Apples"
        },
        {
          id: 13445541,
          text: "Figs"
        },
        {
          id: 14734012,
          text: "Cucumbers"
        },
        {
          id: 124743,
          text: "Cherry Tomatoes"
        },
        {
          id: 147011,
          text: "Sweet Potatoe"
        },
        {
          id: 134711,
          text: "Carrots"
        },
        {
          id: 10345121,
          text: "Beets"
        },
        {
          id: 12345731,
          text: "Mellon"
        },
        {
          id: 113475132,
          text: "Kale"
        },
        {
          id: 1012132,
          text: "Radish"
        },
        {
          id: 1234753132,
          text: "Plum"
        }
      ],
      img: afro
    },
    {
      name: "Cara's Apple Farm",
      location: "Rainbow",
      lat: 33.41033,
      long: -117.14764,
      produce: [
        {
          id: 1034613,
          text: "Plum"
        },
        {
          id: 1137543,
          text: "Grapfruit"
        },
        {
          id: 103734124,
          text: "Potatoes"
        },
        {
          id: 1234753434,
          text: "Brussl Sprouts"
        },
        ,
        {
          id: 10347187,
          text: "Apples"
        },
        {
          id: 13486751,
          text: "Figs"
        },
        {
          id: 1043712,
          text: "Cucumbers"
        },
        {
          id: 124373,
          text: "Cherry Tomatoes"
        },
        {
          id: 143775012,
          text: "Avacado"
        },
        {
          id: 134751,
          text: "Corn"
        },
        {
          id: 1437012,
          text: "Dates"
        },
        {
          id: 12433,
          text: "Banana"
        }
      ],

      img: red
    },
    {
      name: "Tiana's Pears and More",
      location: "San Clemente",
      lat: 33.55975,
      long: -117.220779,
      produce: [
        {
          id: 942143512,
          text: "Pears"
        },
        {
          id: 119439712,
          text: "Kiwi"
        },
        {
          id: 8765312,
          text: "Brocoli"
        },
        {
          id: 2344356512,
          text: "Spinach"
        },
        {
          id: 8047334987,
          text: "Cucumbers"
        },
        {
          id: 347976,
          text: "Mangos"
        },
        {
          id: 94733475215,
          text: "Avacados"
        },
        {
          id: 1144997,
          text: "Mulberries"
        },
        {
          id: 87737653,
          text: "Figs"
        },
        {
          id: 23344565,
          text: "Cherry Tomatoes"
        },
        {
          id: 80437987,
          text: "Cucumbers"
        },
        {
          id: 9757346,
          text: "Mangos"
        }
      ],
      img: burnett
    },
    {
      name: "Kj's Fig Farm",
      location: "Temecula",
      lat: 33.46557,
      long: -117.618023,
      produce: [
        {
          id: 8974574412,
          text: "Fig"
        },
        {
          id: 565612,
          text: "Scott Bonnet"
        },
        {
          id: 344733412,
          text: "Mango"
        },
        {
          id: 2332312,
          text: "Kale"
        },
        {
          id: 1034641212,
          text: "Banana"
        },
        {
          id: 1231232,
          text: "tomatoes"
        },
        {
          id: 8744974,
          text: "Potatoes"
        },
        {
          id: 534574656,
          text: "Blueberries"
        },
        {
          id: 33457434,
          text: "Strawberries"
        },
        {
          id: 234723,
          text: "Lettece"
        },
        {
          id: 1073312,
          text: "Bell Peppers"
        },
        {
          id: 12437412,
          text: "Papaya"
        }
      ],
      img: hat
    },
    {
      name: "Sweet Dates Farm",
      location: "San Diego",
      lat: 32.716744,
      long: -117.162942,
      produce: [
        {
          id: 44345743,
          text: "Onions"
        },
        {
          id: 333457333,
          text: "Garlic"
        },
        {
          id: 22374523,
          text: "Lettece"
        },
        {
          id: 113475413,
          text: "Kale"
        },
        {
          id: 44543423,
          text: "Dates"
        },
        {
          id: 3385432,
          text: "Carrots"
        },
        {
          id: 223475422,
          text: "Plums"
        },
        {
          id: 1143512,
          text: "Black Berries"
        },
        {
          id: 444374,
          text: "Pears"
        },
        {
          id: 337453,
          text: "Figs"
        },
        {
          id: 22457432,
          text: "Persimmons"
        },
        {
          id: 1585311,
          text: "Cherries"
        }
      ],
      img: bread
    },
    {
      name: "Nori's Farm",
      location: "Perris",
      lat: 34.4719383,
      long: -118.1809079,
      produce: [
        {
          id: 185015,
          text: "Sugar Cane"
        },
        {
          id: 1843125,
          text: "Green Apples"
        },
        {
          id: 101765765,
          text: "Squash"
        },
        {
          id: 1135455,
          text: "Carrots"
        },
        {
          id: 10463125,
          text: "Dates"
        },
        {
          id: 1746423,
          text: "Cherry Tomatoes"
        },
        {
          id: 1234601,
          text: "Watermellon"
        },
        {
          id: 156431,
          text: "Peas"
        },
        {
          id: 10353461,
          text: "Cucumbers"
        },
        {
          id: 123421,
          text: "Carrots"
        },
        {
          id: 10345312,
          text: "Plum"
        },
        {
          id: 134523,
          text: "Dragon Fruit"
        }
      ],
      img: blonde
    }
  ],
  selectedFarm: null
};
const farmReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "SELECT_FARMERS":
      newState.selectedFarm = { ...action.payload };
      return newState;
    case "UNSELECT_FARMERS":
      newState.selectedFarm = null;
      return newState;
    default:
      return state;
      break;
  }
};

export default farmReducer;
