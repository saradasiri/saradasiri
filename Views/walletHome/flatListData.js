export const trendingCurrencies =[
    {
      id: 1,
      currency: "Bitcoin",
      code: "BTC",
      // image: require("../assets/bitcoin-icon-deshboard.png"),
      amount: "35,953.28 ",
      changes: " -0.45",
      type: "D",
      description: "Bitcoin is a currency invented in 2008", // i -increased , d - decreased
      current : " 0.011",
      chartData:[
        {x:1, y:2.5},
        {x:1.5 , y:2},
        {x:2 , y: 2.3},
        {x:2.5 , y: 2.3},
        {x:3 , y:1.5},
        {x:3.5 , y:2.3},
        {x:4, y:2.8}
      ]
    },
    {
        id: 2,
        currency: "Ethereum",
        code: "ETH",
        // image: require("../assets/eth-icon-deshboard.png"),
        amount: "10,699.58 ",
        changes: "+0.56",
        type: "I",
        current: "0.025",
        description: "Bitcoin is a currency invented in 2008", // i -increased , d - decreased
        chartData:[
          {x:1, y:2.5},
          {x:1.5 , y:2},
          {x:2.3 , y: 2.3},
          {x:2 , y: 2.3},
          {x:3.2 , y:1.5},
          {x:3 , y:2.3},
          {x:4.1, y:2.8}
        ]
      },
      {
        id: 3,
        currency: "Bitcoin",
        code: "BTC",
        // image: require("../assets/bitcoin-icon-deshboard.png"),
        amount: "35,953.28 ",
        changes: "-0.45",
        type: "D",
        current : "0.011",
        description: "Bitcoin is a currency invented in 2008", // i -increased , d - decreased
        chartData:[
          {x:1.2, y:2.5},
          {x:1 , y:2},
          {x:2.7 , y: 2.3},
          {x:2 , y: 2.3},
          {x:3.6, y:1.5},
          {x:3.9 , y:2.3},
          {x:4, y:2.8}
        ]
      },
      {
        id: 4,
        currency: "Ethereum",
        code: "BTC",
        // image: require("../assets/eth-icon-deshboard.png"),
        amount: "359,536.28 ",
        changes: "+0.45",
        type: "I",
        current : "0.011",
        description: "Bitcoin is a currency invented in 2008", // i -increased , d - decreased
        chartData:[
          {x:1, y:2.5},
          {x:2.5 , y:2},
          {x:2.4 , y: 2.3},
          {x:2 , y: 2.3},
          {x:3 , y:1.5},
          {x:3.5 , y:2.3},
          {x:4.8, y:2.8}
        ]
      },
  ]

  export const barData =  [
    {x:1, y:2.5},
    {x:1.5 , y:2},
    {x:2 , y: 2.3},
    {x:2.5 , y: 2.3},
    {x:3 , y:1.5},
    {x:3.5 , y:2.3},
    {x:4, y:2.8}
  ]
  
  export default chartOptions = [
    {
      id:1,
      label:"1 hr"
    },
    {
      id:2,
      label:"3 days"
    },
    {
      id:3,
      label:"1 week"
    },
    {
      id:4,
      label :"1 Month"
    },
    {
      id:5,
      label :"3 Months"
    }
  ]

  export const purchaseData = [
    {
      id:1,
      description : "Solid Ethererum",
      amount : -2.0034,
      currency: "ETH",
      type : "S" ,//S --sold, B - Bought
      date : "14:20 12 Apr"
    },
    {
      id :2,
      description:"Bought Ethereum",
      amount : 2.0034,
      currency:"ETH",
      type:"B",
      date :"14:20 12 Apr"
    },
    {
      id:3,
      description : "Solid Ethereum",
      amount : -2.0034,
      currency : "ETH",
      type :"S",
      date :"14:20 12 Apr"
    },
    {
      id:4,
      description : "Bought Ethereum",
      amount : 2.0034,
      currency : "ETH",
      type :"b",
      date :"14:20 12 Apr"
    },
    {
      id:5,
      description : "Bought Bitcoin",
      amount : 2.0034,
      currency : "ETH",
      type :"B",
      date :"14:20 12 Apr"
    },
    {
      id:6,
      description : "Solid Ethereum",
      amount : -2.0034,
      currency : "XRP",
      type :"S",
      date :"14:20 12 Apr"
    },
    {
      id:7,
      description : "Bought Ripple",
      amount : 2.0034,
      currency : "XRP",
      type :"B",
      date :"14:20 12 Apr"
    },
    {
      id:8,
      description : "Bought Ripple",
      amount : -2.0034,
      currency : "XRP",
      type :"B",
      date :"14:20 12 Apr"
    },
    {
      id:9,
      description : "Bought Ripple",
      amount : -2.0034,
      currency : "XRP",
      type :"B",
      date :"14:20 12 Apr"
    },
  ]
  