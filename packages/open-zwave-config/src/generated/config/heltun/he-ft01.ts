import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          { text: "Fan Coil Thermostat HE-FT01", name: "Name" },
          {
            text:
              "This is advanced programmable Thermostat for Heating/Cooling Systems",
            name: "Description",
          },
          {
            text: "http://www.openzwave.com/device-database/0344:0002:0004",
            name: "OzwInfoPage",
          },
          { text: "https://www.heltun.com/", name: "ProductPage" },
          { text: "https://www.heltun.com/support", name: "ProductSupport" },
          { text: "images/heltun/he-ft01.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3717",
            id: "0002",
            name: "ZWProductPage",
            type: "0004",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0002",
            name: "FrequencyName",
            type: "0004",
          },
          {
            text: "CEPT (Europe)",
            id: "0002",
            name: "FrequencyName",
            type: "0004",
          },
          {
            text: "Australia / New Zealand",
            id: "0002",
            name: "FrequencyName",
            type: "0004",
          },
          { text: "Russia", id: "0002", name: "FrequencyName", type: "0004" },
          { text: "Israel", id: "0002", name: "FrequencyName", type: "0004" },
          { text: "China", id: "0002", name: "FrequencyName", type: "0004" },
          {
            text: "South Korea",
            id: "0002",
            name: "FrequencyName",
            type: "0004",
          },
          { text: "Japan", id: "0002", name: "FrequencyName", type: "0004" },
          {
            text: "Hong Kong",
            id: "0002",
            name: "FrequencyName",
            type: "0004",
          },
          { text: "India", id: "0002", name: "FrequencyName", type: "0004" },
          { text: "HE-FT01", id: "0002", name: "Identifier", type: "0004" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text: "Metadata for HELTUN FanCoil Thermostat",
                author: "Narek Manukyan - n.manukyan@heltun.com",
                date: "22 January 2020",
                revision: 1,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      {
        id: "64",
        Instance: [{ index: "1" }],
        Value: [
          {
            genre: "user",
            index: "0",
            instance: "1",
            label: "Mode",
            max: "0",
            min: "0",
            read_only: "false",
            size: "1",
            type: "list",
            units: "",
            write_only: "false",
            Item: [
              { label: "OFF", value: "0" },
              { label: "COM with Heating Climate Mode", value: "1" },
              { label: "COM with Cooling Climate Mode", value: "2" },
              { label: "TIME", value: "3" },
              { label: "Ventilation Climate Mode", value: "6" },
              {
                label: "COM with Heating and Colling Climate Mode",
                value: "10",
              },
              { label: "ECO with Heating Climate Mode", value: "11" },
              { label: "ECO with Cooling Climate Mode", value: "12" },
            ],
          },
        ],
        SupportedModes: [
          {
            Mode: [
              { index: "0", label: "OFF" },
              { index: "1", label: "HEAT" },
              { index: "2", label: "COOL" },
              { index: "3", label: "AUTO" },
              { index: "6", label: "FAN" },
              { index: "10", label: "AUTO CHANGEOVER" },
              { index: "11", label: "ENERGY HEAT" },
              { index: "12", label: "ENERGY COOL" },
            ],
          },
        ],
        Compatibility: "",
      },
      {
        id: "67",
        Instance: [{ index: "1" }],
        Value: [
          {
            genre: "user",
            index: "1",
            instance: "1",
            label: "Heating",
            max: "0",
            min: "0",
            read_only: "false",
            type: "decimal",
            units: "C",
            value: "25",
            write_only: "false",
          },
          {
            genre: "user",
            index: "2",
            instance: "1",
            label: "Cooling",
            max: "0",
            min: "0",
            read_only: "false",
            type: "decimal",
            units: "C",
            value: "25",
            write_only: "false",
          },
          {
            genre: "user",
            index: "10",
            instance: "1",
            label: "Auto Changeover",
            max: "0",
            min: "0",
            read_only: "false",
            type: "decimal",
            units: "C",
            value: "25",
            write_only: "false",
          },
          {
            genre: "user",
            index: "11",
            instance: "1",
            label: "Energy Save Heating",
            max: "0",
            min: "0",
            read_only: "false",
            type: "decimal",
            units: "C",
            value: "20",
            write_only: "false",
          },
          {
            genre: "user",
            index: "12",
            instance: "1",
            label: "Energy Save Cooling",
            max: "0",
            min: "0",
            read_only: "false",
            type: "decimal",
            units: "C",
            value: "20",
            write_only: "false",
          },
        ],
        Compatibility: [{ Base: [0], CreateVars: [true] }],
      },
      {
        id: "68",
        Instance: [{ index: "1" }],
        Value: [
          {
            genre: "user",
            index: "0",
            instance: "1",
            label: "Fan Mode",
            size: "1",
            read_only: "false",
            type: "list",
            units: "",
            write_only: "false",
            Item: [
              { label: "On Low", value: "1" },
              { label: "On Auto High", value: "2" },
              { label: "On High", value: "3" },
              { label: "On Auto Medium", value: "4" },
              { label: "On Medium", value: "5" },
              { label: "OFF", value: "128" },
            ],
          },
        ],
        SupportedModes: [
          {
            Mode: [
              { index: "1", label: "LOW" },
              { index: "2", label: "AUTO HIGH" },
              { index: "3", label: "HIGH" },
              { index: "4", label: "AUTO MEMDIUM" },
              { index: "5", label: "MEDIUM" },
              { index: "128", label: "OFF" },
            ],
          },
        ],
        Compatibility: "",
      },
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            label: "Time by controller",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help: "\n\t\t\tTime correction by controller\n\t\t",
            Item: [
              { label: "Manual", value: "0" },
              { label: "Auto(via gateway)", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "2",
            label: "Time format",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "\n\t\t\tTime format 0=24hour, 1=12hour (AM/PM)\n\t\t",
            Item: [
              { label: "24 hour", value: "0" },
              { label: "12 hour", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "3",
            label: "Week day",
            max: "7",
            min: "1",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help: "\n\t\t\tManually set week day\n\t\t",
            Item: [
              { label: "MON", value: "1" },
              { label: "TUE", value: "2" },
              { label: "WED", value: "3" },
              { label: "THU", value: "4" },
              { label: "FRI", value: "5" },
              { label: "SAT", value: "6" },
              { label: "SUN", value: "7" },
            ],
          },
          {
            genre: "config",
            index: "4",
            label: "Time Hour",
            max: "23",
            min: "0",
            size: "1",
            type: "byte",
            units: "hours",
            value: "0",
            Help: "\n\t\t\tManually set time hour\n\t\t",
          },
          {
            genre: "config",
            index: "5",
            label: "Time Minute",
            max: "59",
            min: "0",
            size: "1",
            type: "byte",
            units: "mins",
            value: "0",
            Help: "\n\t\t\tMaually set time minute\n\t\t",
          },
          {
            genre: "config",
            index: "6",
            label: "Degree mode",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "\n\t\tDegree Mode 0=C, 1=F\n\t      ",
            Item: [
              { label: "Celsius", value: "0" },
              { label: "Farenheit", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "7",
            label: "Air temp correction",
            max: "95",
            min: "-95",
            size: "1",
            type: "byte",
            units: "degree",
            value: "0",
            Help: "\n\t\t\tAir Temperature Calibration in degree, x10\n\t\t",
          },
          {
            genre: "config",
            index: "8",
            label: "Temp hysteresis",
            max: "100",
            min: "2",
            size: "1",
            type: "byte",
            units: "degree",
            value: "5",
            Help: "\n\t\t\tTemperature Hysteresis in degree, x10\n\t\t",
          },
          {
            genre: "config",
            index: "9",
            label: "Auto brightness",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help: "\n\t\t\tDisplay auto-brightness control\n\t\t",
            Item: [
              { label: "Manual control", value: "0" },
              { label: "Automatic control", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "10",
            label: "Manual brightness",
            max: "15",
            min: "1",
            size: "1",
            type: "byte",
            units: "",
            value: "10",
            Help: "\n\t\t\tDisplay manual brightness level\n\t\t",
          },
          {
            genre: "config",
            index: "11",
            label: "Touch sensitivity",
            max: "50",
            min: "5",
            size: "1",
            type: "byte",
            units: "",
            value: "15",
            Help:
              "\n\t\t\tTouch buttons sensitivity. 5=Super sensitive. 50=lowest sensitivity.\n\t\t",
          },
          {
            genre: "config",
            index: "14",
            label: "Basic set action",
            max: "9",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "2",
            Help:
              "\n\t\t\tThis Parameter defines which Operating Mode the HE-FT01 reverts to if the Basic Set command is received.\n\t\t",
            Item: [
              { label: "No action", value: "0" },
              {
                label: "COM with Heating and Cooling Climate Mode",
                value: "1",
              },
              { label: "COM with Heating Climate Mode", value: "2" },
              { label: "COM with Cooling Climate Mode", value: "3" },
              {
                label: "TIME with Heating and Cooling Climate Mode",
                value: "4",
              },
              { label: "TIME with Heating Climate Mode", value: "5" },
              { label: "TIME with Cooling Climate Mode", value: "6" },
              { label: "ECO with Heating Climate Mode", value: "7" },
              { label: "ECO with Cooling Climate Mode", value: "8" },
              { label: "Ventilation Climate Mode", value: "9" },
            ],
          },
          {
            genre: "config",
            index: "31",
            label: "Sensor report time",
            max: "120",
            min: "1",
            size: "1",
            type: "byte",
            units: "mins",
            value: "10",
            Help:
              "\n\t\t\tSensors consecutive reporting interval, minutes\n\t\t",
          },
          {
            genre: "config",
            index: "32",
            label: "Consumption report time",
            max: "120",
            min: "1",
            size: "1",
            type: "byte",
            units: "mins",
            value: "10",
            Help:
              "\n\t\t\tConsumption meter consecutive reporting interval, minutes\n\t\t",
          },
          {
            genre: "config",
            index: "33",
            label: "Themperature threshold",
            max: "100",
            min: "0",
            size: "1",
            type: "byte",
            units: "",
            value: "5",
            Help:
              "\n\t\t\tTemperature difference to send to controller, value X 10\n\t\t\tNote: values between 0 ... 5 are not used.\n\t\t",
          },
          {
            genre: "config",
            index: "34",
            label: "Humidity threshold",
            max: "25",
            min: "0",
            size: "1",
            type: "byte",
            units: "%",
            value: "2",
            Help:
              "\n\t\t\tHumidity difference to send to controller, %\n\t\t\tNote: values between 0 ... 2 are not used.\n\t\t",
          },
          {
            genre: "config",
            index: "35",
            label: "Light threshold",
            max: "99",
            min: "0",
            size: "1",
            type: "byte",
            units: "%",
            value: "50",
            Help:
              "\n\t\t\tLight sensor values difference to send to controller, %\n\t\t\tNote: values between 0 ... 10 are not used.\n\t\t",
          },
          {
            genre: "config",
            index: "36",
            label: "Power of the Relay 1 load in W",
            max: "5000",
            min: "0",
            size: "2",
            type: "short",
            units: "W",
            value: "0",
            Help: "\n\t\t\tPower of the Relay 1 load in W\n\t\t",
          },
          {
            genre: "config",
            index: "37",
            label: "Power of the Relay 2 load in W",
            max: "5000",
            min: "0",
            size: "2",
            type: "short",
            units: "W",
            value: "0",
            Help: "\n\t\t\tPower of the Relay 2 load in W\n\t\t",
          },
          {
            genre: "config",
            index: "38",
            label: "Power of the Relay 3 load in W",
            max: "5000",
            min: "0",
            size: "2",
            type: "short",
            units: "W",
            value: "0",
            Help: "\n\t\t\tPower of the Relay 3 load in W\n\t\t",
          },
          {
            genre: "config",
            index: "39",
            label: "Power of the Relay 4 load in W",
            max: "5000",
            min: "0",
            size: "2",
            type: "short",
            units: "W",
            value: "0",
            Help: "\n\t\t\tPower of the Relay 4 load in W\n\t\t",
          },
          {
            genre: "config",
            index: "40",
            label: "Power of the Relay 5 load in W",
            max: "5000",
            min: "0",
            size: "2",
            type: "short",
            units: "W",
            value: "0",
            Help: "\n\t\t\tPower of the Relay 5 load in W\n\t\t",
          },
          {
            genre: "config",
            index: "41",
            label: "TIME mode operation",
            max: "3",
            min: "1",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help:
              "\n\t\t\tThis parameter determines the Climate Mode (Heating or Cooling) to which HE-FT01 will switch when the TIME operating mode is selected. \n\t\t\tIf the value = 1 the thermostat will go to Heating  and Cooling mode, if value = 2 the thermostat goes to Heating mode, if the value = 3 the thermostat goes to Cooling Mode. \n\t\t",
            Item: [
              { label: "Heating and Cooling mode", value: "1" },
              { label: "Heating mode", value: "2" },
              { label: "Cooling Mode", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "42",
            label: "Morning start time",
            max: "2359",
            min: "0000",
            size: "2",
            type: "short",
            units: "HHMM",
            value: "0600",
            Help:
              "\n\t\t\tMorning start time. Format: HHMM. e.g.08:00 should be sent as 0800\n\t\t",
          },
          {
            genre: "config",
            index: "43",
            label: "Day start time",
            max: "2359",
            min: "0000",
            size: "2",
            type: "short",
            units: "HHMM",
            value: "0900",
            Help: "\n\t\t\tDay start time. Format: HHMM.\n\t\t",
          },
          {
            genre: "config",
            index: "44",
            label: "Evening start time",
            max: "2359",
            min: "0000",
            size: "2",
            type: "short",
            units: "HHMM",
            value: "1800",
            Help: "\n\t\t\tEvening start time. Format: HHMM.\n\t\t",
          },
          {
            genre: "config",
            index: "45",
            label: "Night Start time",
            max: "2359",
            min: "0000",
            size: "2",
            type: "short",
            units: "HHMM",
            value: "2300",
            Help: "\n\t\t\tNight start time. Format: HHMM.\n\t\t",
          },
          {
            genre: "config",
            index: "46",
            label: "Monday morning temp",
            max: "370",
            min: "40",
            size: "2",
            type: "short",
            units: "degree",
            value: "240",
            Help: "\n\t\t\tMonday morning temperature, value x10\n\t\t",
          },
          {
            genre: "config",
            index: "47",
            label: "Monday day temp",
            max: "370",
            min: "40",
            size: "2",
            type: "short",
            units: "degree",
            value: "200",
            Help: "\n\t\t\tMonday day temperature, value x10\n\t\t",
          },
          {
            genre: "config",
            index: "48",
            label: "Monday evening temp",
            max: "370",
            min: "40",
            size: "2",
            type: "short",
            units: "degree",
            value: "230",
            Help: "\n\t\t\tMonday evening temperature, value x10\n\t\t",
          },
          {
            genre: "config",
            index: "49",
            label: "Monday night temp",
            max: "370",
            min: "40",
            size: "2",
            type: "short",
            units: "degree",
            value: "180",
            Help: "\n\t\t\tMonday night temperature, value x10\n\t\t",
          },
          {
            genre: "config",
            index: "50",
            label: "Tuesday morning temp",
            max: "370",
            min: "40",
            size: "2",
            type: "short",
            units: "degree",
            value: "240",
            Help: "\n\t\t\tTuesday morning temperature, value x10\n\t\t",
          },
          {
            genre: "config",
            index: "51",
            label: "Tuesday day temp",
            max: "370",
            min: "40",
            size: "2",
            type: "short",
            units: "degree",
            value: "200",
            Help: "\n\t\t\tTuesday day temperature, value x10\n\t\t",
          },
          {
            genre: "config",
            index: "52",
            label: "Tuesday evening temp",
            max: "370",
            min: "40",
            size: "2",
            type: "short",
            units: "degree",
            value: "230",
            Help: "\n\t\t\tTuesday evening temperature, value x10\n\t\t",
          },
          {
            genre: "config",
            index: "53",
            label: "Tuesday night temp",
            max: "370",
            min: "40",
            size: "2",
            type: "short",
            units: "degree",
            value: "180",
            Help: "\n\t\t\tTuesday night temperature, value x10\n\t\t",
          },
          {
            genre: "config",
            index: "54",
            label: "Wednesday morning temp",
            max: "370",
            min: "40",
            size: "2",
            type: "short",
            units: "degree",
            value: "240",
            Help: "\n\t\t\tWednesday morning temperature, value x10\n\t\t",
          },
          {
            genre: "config",
            index: "55",
            label: "Wednesday day temp",
            max: "370",
            min: "40",
            size: "2",
            type: "short",
            units: "degree",
            value: "200",
            Help: "\n\t\t\tWednesday day temperature, value x10\n\t\t",
          },
          {
            genre: "config",
            index: "56",
            label: "Wednesday evening temp",
            max: "370",
            min: "40",
            size: "2",
            type: "short",
            units: "degree",
            value: "230",
            Help: "\n\t\t\tWednesday evening temperature, value x10\n\t\t",
          },
          {
            genre: "config",
            index: "57",
            label: "Wednesday night temp",
            max: "370",
            min: "40",
            size: "2",
            type: "short",
            units: "degree",
            value: "180",
            Help: "\n\t\t\tWednesday night temperature, value x10\n\t\t",
          },
          {
            genre: "config",
            index: "58",
            label: "Thursday morning temp",
            max: "370",
            min: "40",
            size: "2",
            type: "short",
            units: "degree",
            value: "240",
            Help: "\n\t\t\tThursday morning temperature, value x10\n\t\t",
          },
          {
            genre: "config",
            index: "59",
            label: "Thursday day temp",
            max: "370",
            min: "40",
            size: "2",
            type: "short",
            units: "degree",
            value: "200",
            Help: "\n\t\t\tThursday day temperature, value x10\n\t\t",
          },
          {
            genre: "config",
            index: "60",
            label: "Thursday evening temp",
            max: "370",
            min: "40",
            size: "2",
            type: "short",
            units: "degree",
            value: "230",
            Help: "\n\t\t\tThursday evening temperature, value x10\n\t\t",
          },
          {
            genre: "config",
            index: "61",
            label: "Thursday night temp",
            max: "370",
            min: "40",
            size: "2",
            type: "short",
            units: "degree",
            value: "180",
            Help: "\n\t\t\tThursday night temperature, value x10\n\t\t",
          },
          {
            genre: "config",
            index: "62",
            label: "Friday morning temp",
            max: "370",
            min: "40",
            size: "2",
            type: "short",
            units: "degree",
            value: "240",
            Help: "\n\t\t\tFriday morning temperature, value x10\n\t\t",
          },
          {
            genre: "config",
            index: "63",
            label: "Friday day temp",
            max: "370",
            min: "40",
            size: "2",
            type: "short",
            units: "degree",
            value: "200",
            Help: "\n\t\t\tFriday day temperature, value x10\n\t\t",
          },
          {
            genre: "config",
            index: "64",
            label: "Friday evening temp",
            max: "370",
            min: "40",
            size: "2",
            type: "short",
            units: "degree",
            value: "230",
            Help: "\n\t\t\tFriday evening temperature, value x10\n\t\t",
          },
          {
            genre: "config",
            index: "65",
            label: "Friday night temp",
            max: "370",
            min: "40",
            size: "2",
            type: "short",
            units: "degree",
            value: "180",
            Help: "\n\t\t\tFriday night temperature, value x10\n\t\t",
          },
          {
            genre: "config",
            index: "66",
            label: "Saturday morning temp",
            max: "370",
            min: "40",
            size: "2",
            type: "short",
            units: "degree",
            value: "240",
            Help: "\n\t\t\tSaturday morning temperature, value x10\n\t\t",
          },
          {
            genre: "config",
            index: "67",
            label: "Saturday day temp",
            max: "370",
            min: "40",
            size: "2",
            type: "short",
            units: "degree",
            value: "200",
            Help: "\n\t\t\tSaturday day temperature, value x10\n\t\t",
          },
          {
            genre: "config",
            index: "68",
            label: "Saturday evening temp",
            max: "370",
            min: "40",
            size: "2",
            type: "short",
            units: "degree",
            value: "230",
            Help: "\n\t\t\tSaturday evening temperature, value x10\n\t\t",
          },
          {
            genre: "config",
            index: "69",
            label: "Saturday night temp",
            max: "370",
            min: "40",
            size: "2",
            type: "short",
            units: "degree",
            value: "180",
            Help: "\n\t\t\tSaturday night temperature, value x10\n\t\t",
          },
          {
            genre: "config",
            index: "70",
            label: "Sunday morning temp",
            max: "370",
            min: "40",
            size: "2",
            type: "short",
            units: "degree",
            value: "240",
            Help: "\n\t\t\tSunday morning temperature, value x10\n\t\t",
          },
          {
            genre: "config",
            index: "71",
            label: "Sunday day temp",
            max: "370",
            min: "40",
            size: "2",
            type: "short",
            units: "degree",
            value: "200",
            Help: "\n\t\t\tSunday day temperature, value x10\n\t\t",
          },
          {
            genre: "config",
            index: "72",
            label: "Sunday evening temp",
            max: "370",
            min: "40",
            size: "2",
            type: "short",
            units: "degree",
            value: "230",
            Help: "\n\t\t\tSunday evening temperature, value x10\n\t\t",
          },
          {
            genre: "config",
            index: "73",
            label: "Sunday night temp",
            max: "370",
            min: "40",
            size: "2",
            type: "short",
            units: "degree",
            value: "180",
            Help: "\n\t\t\tSunday night temperature, value x10\n\t\t",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "6",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              {
                auto: "true",
                index: "2",
                label: "Fan Low Speed (OUT-1)",
                max_associations: "10",
              },
              {
                auto: "true",
                index: "3",
                label: "Fan Medium Speed (OUT-2)",
                max_associations: "10",
              },
              {
                auto: "true",
                index: "4",
                label: "Fan High Speed (OUT-3)",
                max_associations: "10",
              },
              {
                auto: "true",
                index: "5",
                label: "Heater (OUT-4)",
                max_associations: "10",
              },
              {
                auto: "true",
                index: "6",
                label: "Cooler (OUT-5)",
                max_associations: "10",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
