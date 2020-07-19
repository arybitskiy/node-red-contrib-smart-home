import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0086:001C:0002",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/dsb28.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/705/",
            id: "001C",
            name: "ZWProductPage",
            type: "0002",
          },
          { text: "DSB28-ZWUS", id: "001C", name: "Identifier", type: "0002" },
          {
            text: "U.S. / Canada / Mexico",
            id: "001C",
            name: "FrequencyName",
            type: "0002",
          },
          {
            text:
              "You hear a lot about energy use these days. About how if we reduce the amount of energy we use we can not only save money but also save the environment. But saving money by using less electricity is only possible if we understand when and how we use it. That’s what Aeotec’s Z-Wave Home Energy Meter provides you with – understanding.\n\nInstalled in an electricity box, the energy meter will monitor the total consumption of electricity used by an entire building. And its intelligent clamps will report that energy use back to your Z-Wave gateway or controller, in watts or kilowatt-hours, and in real time. So you can see how much electricity you really use and when you use it.",
            name: "Description",
          },
          { text: "Home Energy Meter G2", name: "Name" },
          {
            text: "http://aeotec.com/z-wave-home-energy-measure",
            name: "ProductPage",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/705/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 2,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "2",
            label: "Reverse Clamping",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "\n      If the reverse clamping pliers, negative power is detected. \n      ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "3",
            label: "Power changed",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "\n\tAutomatic report only when power is changed.\n      ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "4",
            label: "Wattage Threshold",
            type: "short",
            units: "watts",
            value: "50",
            Help:
              "\n\tThreshold change in wattage to induce a automatic report (whole HEM).\n      ",
          },
          {
            genre: "config",
            index: "5",
            label: "Wattage Threshold C1",
            type: "short",
            units: "watts",
            value: "50",
            Help:
              "\n\tThreshold change in wattage to induce a automatic report (Clamp 1).\n      ",
          },
          {
            genre: "config",
            index: "6",
            label: "Wattage Threshold C2",
            type: "short",
            units: "watts",
            value: "50",
            Help:
              "\n\tThreshold change in wattage to induce a automatic report (Clamp 2).\n      ",
          },
          {
            genre: "config",
            index: "7",
            label: "Wattage Threshold C3",
            type: "short",
            units: "watts",
            value: "50",
            Help:
              "\n\tThreshold change in wattage to induce a automatic report (Clamp 3).\n      ",
          },
          {
            genre: "config",
            index: "8",
            label: "Wattage Percentage Change",
            type: "byte",
            units: "%",
            value: "10",
            Help:
              "\n\tPercentage change in wattage to induce a automatic report (whole HEM).\n      ",
          },
          {
            genre: "config",
            index: "9",
            label: "Wattage Percentage Change C1",
            type: "byte",
            units: "%",
            value: "10",
            Help:
              "\n\tPercentage change in wattage to induce a automatic report (Clamp 1).\n      ",
          },
          {
            genre: "config",
            index: "10",
            label: "Wattage Percentage Change C2",
            type: "byte",
            units: "%",
            value: "10",
            Help:
              "\n\tPercentage change in wattage to induce a automatic report (Clamp 2).\n      ",
          },
          {
            genre: "config",
            index: "11",
            label: "Wattage Percentage Change C3",
            type: "byte",
            units: "%",
            value: "10",
            Help:
              "\n\tPercentage change in wattage to induce a automatic report (Clamp 3).\n      ",
          },
          {
            affects: "101,102,103",
            genre: "config",
            index: "100",
            label: "Reset #101-103",
            type: "int",
            units: "",
            value: "0",
            write_only: "true",
            Help:
              "\n\tReset to default parameters number 101-103. Any value other then 0 will initiate this reset.\n      ",
          },
          {
            genre: "config",
            index: "101",
            label: "Group 1 Reports",
            type: "int",
            units: "",
            value: "0",
            Help:
              "\n\tWhich reports need to send in group1. Format is as follows:\n\tByte 1 (msb): Reserved\n\tByte 2: Reserved\n\tByte 3: Bit 7: reserved\n                Bit 6: reserved\n                Bit 5: Auto Send Meter Report (for kWh) at the group time interval (Clamp 3)\n                Bit 4: Auto Send Meter Report (for kWh) at the group time interval (Clamp 2)\n                Bit 3: Auto Send Meter Report (for kWh) at the group time interval (Clamp 1)\n                Bit 2: Auto Send Meter Report (for watts) at the group time interval (Clamp 3)\n                Bit 1: Auto Send Meter Report (for watts) at the group time interval (Clamp 2)\n                Bit 0: Auto Send Meter Report (for watts) at the group time interval (Clamp 1)\n\tByte 4 (lsb): Bit 7: reserved\n                Bit 6: reserved\n                Bit 5: reserved\n                Bit 4: reserved\n                Bit 3: Auto Send Meter Report (for kWh) at the group time interval (whole HEM)\n                Bit 2: Auto Send Meter Report (for watts) at the group time interval (whole HEM)\n                Bit 1: Auto Send Multilevel Sensor Report (for watts) at the group time interval (whole HEM)\n                Bit 0: Auto Send Battery Report at the group time interval (whole HEM)\n      ",
          },
          {
            genre: "config",
            index: "102",
            label: "Group 2 Reports",
            type: "int",
            units: "",
            value: "0",
            Help:
              "\n\tWhich reports need to send in group2. Format is as follows:\n\tByte 1 (msb): Reserved\n\tByte 2: Reserved\n\tByte 3: Bit 7: reserved\n                Bit 6: reserved\n                Bit 5: Auto Send Meter Report (for kWh) at the group time interval (Clamp 3)\n                Bit 4: Auto Send Meter Report (for kWh) at the group time interval (Clamp 2)\n                Bit 3: Auto Send Meter Report (for kWh) at the group time interval (Clamp 1)\n                Bit 2: Auto Send Meter Report (for watts) at the group time interval (Clamp 3)\n                Bit 1: Auto Send Meter Report (for watts) at the group time interval (Clamp 2)\n                Bit 0: Auto Send Meter Report (for watts) at the group time interval (Clamp 1)\n\tByte 4 (lsb): Bit 7: reserved\n                Bit 6: reserved\n                Bit 5: reserved\n                Bit 4: reserved\n                Bit 3: Auto Send Meter Report (for kWh) at the group time interval (whole HEM)\n                Bit 2: Auto Send Meter Report (for watts) at the group time interval (whole HEM)\n                Bit 1: Auto Send Multilevel Sensor Report (for watts) at the group time interval (whole HEM)\n                Bit 0: Auto Send Battery Report at the group time interval (whole HEM)\n      ",
          },
          {
            genre: "config",
            index: "103",
            label: "Group 3 Reports",
            type: "int",
            units: "",
            value: "0",
            Help:
              "\n\tWhich reports need to send in group3. Format is as follows:\n\tByte 1 (msb): Reserved\n\tByte 2: Reserved\n\tByte 3: Bit 7: reserved\n\tBit 6: reserved\n                Bit 5: Auto Send Meter Report (for kWh) at the group time interval (Clamp 3)\n                Bit 4: Auto Send Meter Report (for kWh) at the group time interval (Clamp 2)\n                Bit 3: Auto Send Meter Report (for kWh) at the group time interval (Clamp 1)\n                Bit 2: Auto Send Meter Report (for watts) at the group time interval (Clamp 3)\n                Bit 1: Auto Send Meter Report (for watts) at the group time interval (Clamp 2)\n                Bit 0: Auto Send Meter Report (for watts) at the group time interval (Clamp 1)\n\tByte 4 (lsb): Bit 7: reserved\n                Bit 6: reserved\n                Bit 5: reserved\n                Bit 4: reserved\n                Bit 3: Auto Send Meter Report (for kWh) at the group time interval (whole HEM)\n                Bit 2: Auto Send Meter Report (for watts) at the group time interval (whole HEM)\n                Bit 1: Auto Send Multilevel Sensor Report (for watts) at the group time interval (whole HEM)\n                Bit 0: Auto Send Battery Report at the group time interval (whole HEM)\n      ",
          },
          {
            affects: "111,112,113",
            genre: "config",
            index: "110",
            label: "Reset #111-113",
            type: "int",
            units: "",
            value: "0",
            write_only: "true",
            Help:
              "\n\tReset to default parameters number 111-113. Any value other then 0 will initiate this reset.\n      ",
          },
          {
            genre: "config",
            index: "111",
            label: "Group 1 Interval",
            type: "int",
            units: "seconds",
            value: "720",
            Help: "\n\tThe interval of sending report group 1.\n      ",
          },
          {
            genre: "config",
            index: "112",
            label: "Group 2 Interval",
            type: "int",
            units: "seconds",
            value: "720",
            Help: "\n\tThe interval of sending report group 2.\n      ",
          },
          {
            genre: "config",
            index: "113",
            label: "Group 3 Interval",
            type: "int",
            units: "seconds",
            value: "720",
            Help: "\n\tThe interval of sending report group 3.\n      ",
          },
          {
            genre: "config",
            index: "200",
            label: "Partner ID",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Item: [
              { label: "Aeon Labs Standard Product", value: "0" },
              { label: "AT&T", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "254",
            label: "Device Tag",
            type: "short",
            units: "",
            value: "0",
            Help: "\n\tDevice tag.\n      ",
          },
          {
            affects: "all",
            genre: "config",
            index: "255",
            label: "Reset default configuration",
            type: "int",
            units: "",
            value: "0",
            write_only: "true",
            Help: "\n\tReset to the default configuration.\n      ",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "5" }],
          },
        ],
      },
    ],
  },
};

export default config;
