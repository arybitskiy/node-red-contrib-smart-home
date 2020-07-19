import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0086:0009:0002",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/dsb09104.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/141/",
            id: "0009",
            name: "ZWProductPage",
            type: "0002",
          },
          {
            text: "http://www.aeon-labs.com/site/products/category/1/",
            name: "ProductPage",
          },
          {
            text: "http://www.aeon-labs.com/site/support/",
            name: "ProductSupport",
          },
          {
            text:
              "The Aeon Labs Smart Energy Monitor is a low-cost energy monitor for the entire home. It can wirelessly report immediate wattage and kWh usage to central control point gateways such as the 4HomeMedia CP and can be easily and safely installed by anyone.",
            name: "Description",
          },
          {
            text: "U.S. / Canada / Mexico / CEPT (Europe)",
            id: "0009",
            name: "FrequencyName",
            type: "0002",
          },
          { text: "Aeon Labs Home Energy Meter EU", name: "Name" },
          {
            text: "DSB09xxx-ZWUS v1.54",
            id: "0009",
            name: "Identifier",
            type: "0002",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/140/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/141/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 4,
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
            index: "1",
            label: "Country Voltage",
            max: "240",
            min: "0",
            type: "short",
            units: "volts",
            value: "120",
            Help:
              "\n\tVoltage to calculate wattage from amperage. US=120. EU,ANZ=240.\n      ",
          },
          {
            genre: "config",
            index: "3",
            label: "Power changed",
            max: "1",
            min: "0",
            type: "byte",
            units: "",
            value: "0",
            Help: "\n\tAutomatic report only when power is changed.\n      ",
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
            genre: "config",
            index: "12",
            label: "Accumulate energy",
            max: "1",
            min: "0",
            type: "byte",
            units: "",
            value: "0",
            Help: "\n\tAccumulate energy when Battery Powered.\n      ",
          },
          {
            genre: "config",
            index: "20",
            label: "USB powered",
            max: "1",
            min: "0",
            read_only: "true",
            type: "byte",
            units: "",
            value: "0",
            Help:
              "\n\tThis byte denotes whether the product is using batteries (value = 0) or using USB power (value = 1).\n      ",
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
            index: "253",
            label: "Unit Recalibration (dangerous)",
            type: "int",
            units: "",
            value: "0",
            write_only: "true",
            Help:
              "\n\tRe-calibrate (will destroy factory calibration). CONTACT AEON LABS before using.\n      ",
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
      { id: "132", Compatibility: [{ CreateVars: [false] }] },
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
