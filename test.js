var Swift = require('./lib/swift');
var swift = new Swift();

const message = swift.generate([
  {
    block: 1, data: {
      "applicationId": "F",
      "serviceId": "21",
      "receivingLtId": "RMSFGB2LAXXX",
      "sessionNumber": "0094",
      "sequenceNumber": "049783"
    }
  },
  {
    block: 2, data: {
      "direction": "O",
      "msgType": "509",
      "inputTime": "1606",
      "inputDate": "170725",
      "bic": "SOPPLULXAXXX",
      "sessionNumber": "5416",
      "sequenceNumber": "290317",
      "outputDate": "170725",
      "outputTime": "1506",
      "prio": "N"
    }
  },
  {
    block: 3, data: {
      "108": "MF00000000000022"
    }
  },
  {
    block: 4, data: [
      {
        "type": "16",
        "option": "R",
        "fieldValue": "GENL",
        "content": ":16R:GENL"
      },
      {
        "type": "20",
        "option": "C",
        "fieldValue": ":SEME//MF00000000000022",
        "content": ":20C::SEME//MF00000000000022"
      },
      {
        "type": "16",
        "option": "S",
        "fieldValue": "SETDET",
        "content": ":16S:SETDET"
      }
    ]
  },
  {
    block: 5, data: {
      "MAC": "00000000",
      "CHK": "11E37804E6A0"
    }
  },
  {
    block: 'S', data: {
      "SAC": undefined,
      "COP": "P"
    }
  }
]);

console.log(message)
