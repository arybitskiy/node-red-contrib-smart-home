import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 7,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/5254:8377:0101",
            name: "OzwInfoPage",
          },
          { text: "images/remotec/zxt-120.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/715/",
            id: "8377",
            name: "ZWProductPage",
            type: "0101",
          },
          { text: "BW8377EU", id: "8377", name: "Identifier", type: "0101" },
          { text: "Remotec BW8377IL", name: "Name" },
          { text: "Remotec BW8377IL", name: "Description" },
          {
            text:
              "http://www.remotec.com.hk/zaspx/product_content.aspx?aboutno=36&subaboutno=45&main=f",
            name: "ProductPage",
          },
          {
            text: "CEPT (Europe)",
            id: "8377",
            name: "FrequencyName",
            type: "0101",
          },
          {
            text: "https://products.z-wavealliance.org/products/1551/",
            id: "8377",
            name: "ZWProductPage",
            type: "0102",
          },
          { text: "BW8377AU", id: "8377", name: "Identifier", type: "0102" },
          {
            text: "Australia / New Zealand",
            id: "8377",
            name: "FrequencyName",
            type: "0102",
          },
          {
            text: "https://products.z-wavealliance.org/products/1552/",
            id: "8377",
            name: "ZWProductPage",
            type: "0100",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "8377",
            name: "FrequencyName",
            type: "0100",
          },
          { text: "BW8377US", id: "8377", name: "Identifier", type: "0100" },
          {
            text: "https://products.z-wavealliance.org/products/1830/",
            id: "8377",
            name: "ZWProductPage",
            type: "0107",
          },
          { text: "BW8377IL", id: "8377", name: "Identifier", type: "0107" },
          { text: "Israel", id: "8377", name: "FrequencyName", type: "0107" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/715/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1551/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "23 May 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1552/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "23 May 2019",
                revision: 6,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1830/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 7,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      { id: "67", Compatibility: [{ GetSupported: [false], Base: [0] }] },
      {
        id: "64",
        Value: [
          {
            genre: "user",
            index: "0",
            instance: "1",
            label: "Mode",
            max: "0",
            min: "0",
            read_only: "false",
            type: "list",
            units: "",
            value: "0",
            write_only: "false",
            Item: [
              { label: "Off", value: "0" },
              { label: "Heat", value: "1" },
              { label: "Cool", value: "2" },
              { label: "Resume", value: "5" },
              { label: "Fan Only", value: "6" },
              { label: "Dry Air", value: "8" },
              { label: "Auto Changeover", value: "10" },
            ],
          },
        ],
        SupportedModes: [
          {
            Mode: [
              { index: "0", label: "Off" },
              { index: "1", label: "Heat" },
              { index: "2", label: "Cool" },
              { index: "5", label: "Resume" },
              { index: "6", label: "Fan Only" },
              { index: "8", label: "Dry Air" },
              { index: "10", label: "Auto Changeover" },
            ],
          },
        ],
        Compatibility: [{ CreateVars: [true] }],
      },
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "25",
            label:
              "Indicate a location for IR code learning and start learning",
            max: "22",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            write_only: "true",
            Help:
              '\n\t\t\t\tIn case none of the code on the code list works for the targeted air conditioner, user can use IR code learning function.\n\t\t\t\tSee manual at section "IR Code Learning" for a description of the procedure. Value 0-22\n\t\t\t',
            Item: [
              { label: "OFF", value: "0" },
              { label: "ON (resume)", value: "1" },
              { label: "cool 19 C", value: "2" },
              { label: "cool 20 C", value: "3" },
              { label: "cool 21 C", value: "4" },
              { label: "cool 22 C", value: "5" },
              { label: "cool 23 C", value: "6" },
              { label: "cool 24 C", value: "7" },
              { label: "cool 25 C", value: "8" },
              { label: "cool 26 C", value: "9" },
              { label: "cool 27 C", value: "10" },
              { label: "cool 28 C", value: "11" },
              { label: "heat 19 C", value: "12" },
              { label: "heat 20 C", value: "13" },
              { label: "heat 21 C", value: "14" },
              { label: "heat 22 C", value: "15" },
              { label: "heat 23 C", value: "16" },
              { label: "heat 24 C", value: "17" },
              { label: "heat 25 C", value: "18" },
              { label: "heat 26 C", value: "19" },
              { label: "heat 27 C", value: "20" },
              { label: "heat 28 C", value: "21" },
            ],
          },
          {
            genre: "config",
            index: "26",
            label: "Learning status register",
            read_only: "true",
            size: "1",
            type: "list",
            Help:
              "Note: The status value 0x01 and 0x04 will be reset to 0 when the ZXT-120 receive a get command to this parameter.\n\t\t\t\tIdle - this IR channel is idle (default).\n\t\t\t\tOK - the latest learning process successful and completed.\n\t\t\t\tLearning - the ZXT- 120 is busy processing previous learning request.\n\t\t\t\tFailed - the latest learning request failed.",
            Item: [
              { label: "Idle", value: "0" },
              { label: "OK", value: "1" },
              { label: "Learning", value: "2" },
              { label: "Failed", value: "4" },
            ],
          },
          {
            genre: "config",
            index: "27",
            label: "IR code number for built-in code library",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "Look up the code list of ZXT-120 according to your AC brand.",
          },
          {
            genre: "config",
            index: "28",
            label: "External IR Emitter power level",
            size: "1",
            type: "list",
            value: "255",
            Help: "",
            Item: [
              { label: "Normal", value: "0" },
              { label: "High", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "32",
            label: "Surround IR control",
            size: "1",
            type: "list",
            value: "255",
            Help:
              "\n\t\t\t\tTo avoid the IR interference by disabling the surrounding IR emitter if 2 air-conditioners in a room are used.\n\t\t\t\tExtend the battery life by disabling the Surround IR Emitters\n\t\t\t",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "33",
            label: "AC function SWING control",
            size: "1",
            type: "list",
            value: "1",
            Help: "",
            Item: [
              { label: "Off", value: "0" },
              { label: "Auto", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "35",
            label: "Learn location status",
            read_only: "true",
            size: "1",
            type: "byte",
            Help:
              "\n\t\t\t\tBit mask = 1, learn location has learn data.\n\t\t\t\tOtherwise, Bit mask 0 See figure Learn location\n\t\t\t",
          },
          {
            genre: "config",
            index: "37",
            instance: "1",
            label: "Sensor temperature compensation",
            max: "255",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n\t\t\t\tThis parameter is used to compensate the temperature error at temperature sensor.\n\t\t\t\tFormula: Display temperature = sensor reading value + offset value\n\t\t\t\t(unit = degree C)\n\t\t\t\t0x00 = 0C (Default)\n\t\t\t",
            Item: [
              { label: "0 C", value: "0" },
              { label: "1 C", value: "1" },
              { label: "2 C", value: "2" },
              { label: "3 C", value: "3" },
              { label: "4 C", value: "4" },
              { label: "5 C", value: "5" },
              { label: "-1 C", value: "255" },
              { label: "-2 C", value: "254" },
              { label: "-3 C", value: "253" },
              { label: "-4 C", value: "252" },
              { label: "-5 C", value: "251" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
