import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0086:005F:0102",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/zw095.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1289/",
            id: "005F",
            name: "ZWProductPage",
            type: "0102",
          },
          {
            text:
              "Press and hold the Action button that you can find on the product's housing for 10 seconds and then release. This procedure should only be used when the primary controller is inoperable.",
            name: "ResetDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "005F",
            name: "FrequencyName",
            type: "0102",
          },
          {
            text:
              "Turn the primary controller of Z-Wave network into inclusion mode, short press the product’s Action button that you can find on the product's housing.",
            name: "InclusionDescription",
          },
          {
            text:
              "Aeon Labs Home Energy Meter Gen5 is a Z-Wave device that can monitor the total amount of electricity of your home. \nIt can report the wattage energy usage and KWH usage to a Z-Wave Controller (especially a gateway). In near real-time you’ll have a full understanding of how much electricity you use and when you use it.\nProducts that are Z-Wave certified can be used and communicate with other Z-Wave certified devices. Also a tool that can be programmed, scheduled, controlled and communicated with from anywhere in the world.",
            name: "Description",
          },
          { text: "ZW095-A", id: "005F", name: "Identifier", type: "0102" },
          { text: "N/A", name: "WakeupDescription" },
          {
            text:
              "Turn the primary controller of Z-Wave network into exclusion mode, short press the product’s Action button that you can find on the product's housing.",
            name: "ExclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2046/Home Energy Meter Gen5 manual.pdf",
            name: "ProductManual",
          },
          { text: "Home Energy Meter Gen5", name: "Name" },
          {
            text: "https://products.z-wavealliance.org/products/2046/",
            id: "005F",
            name: "ZWProductPage",
            type: "0002",
          },
          {
            text: "CEPT (Europe)",
            id: "005F",
            name: "FrequencyName",
            type: "0002",
          },
          { text: "ZW095-C", id: "005F", name: "Identifier", type: "0002" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1289/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1596/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "23 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2046/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 5,
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
            label: "Power, energy detection mode",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "For parameters of 101 ~ 103, power, energy detection mode configuration",
            Item: [
              { label: "Report absolute value", value: "0" },
              { label: "Report algebraic sum energy", value: "1" },
              { label: "Report consuming electricity", value: "2" },
              { label: "Report generating electricity", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "3",
            label: "Selective reporting",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help:
              "\n\t\t\t\tEnable selective reporting only when power change reaches a certain threshold or percentage set in 4-11 below. This is used to reduce network traffic.\n\t\t\t",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "4",
            label: "Wattage Threshold Whole HEM",
            max: "60000",
            min: "0",
            type: "short",
            units: "watts",
            value: "50",
            Help:
              "\n\t\t\t\tThreshold change in wattage to induce a automatic report (whole HEM).\n\t\t\t",
          },
          {
            genre: "config",
            index: "5",
            label: "Wattage Threshold C1",
            max: "60000",
            min: "0",
            type: "short",
            units: "watts",
            value: "50",
            Help:
              "\n\t\t\t\tThreshold change in wattage to induce a automatic report (Clamp 1).\n\t\t\t",
          },
          {
            genre: "config",
            index: "6",
            label: "Wattage Threshold C2",
            max: "60000",
            min: "0",
            type: "short",
            units: "watts",
            value: "50",
            Help:
              "\n\t\t\t\tThreshold change in wattage to induce a automatic report (Clamp 2).\n\t\t\t",
          },
          {
            genre: "config",
            index: "7",
            label: "Wattage Threshold C3",
            max: "60000",
            min: "0",
            type: "short",
            units: "watts",
            value: "50",
            Help:
              "\n\t\t\t\tThreshold change in wattage to induce a automatic report (Clamp 3).\n\t\t\t",
          },
          {
            genre: "config",
            index: "8",
            label: "Wattage Percentage Change Whole HEM",
            max: "100",
            min: "0",
            type: "byte",
            units: "%",
            value: "10",
            Help:
              "\n\t\t\t\tPercentage change in wattage to induce a automatic report (whole HEM).\n\t\t\t",
          },
          {
            genre: "config",
            index: "9",
            label: "Wattage Percentage Change C1",
            max: "100",
            min: "0",
            type: "byte",
            units: "%",
            value: "10",
            Help:
              "\n\t\t\t\tPercentage change in wattage to induce a automatic report (Clamp 1).\n\t\t\t",
          },
          {
            genre: "config",
            index: "10",
            label: "Wattage Percentage Change C2",
            max: "100",
            min: "0",
            type: "byte",
            units: "%",
            value: "10",
            Help:
              "\n\t\t\t\tPercentage change in wattage to induce a automatic report (Clamp 2).\n\t\t\t",
          },
          {
            genre: "config",
            index: "11",
            label: "Wattage Percentage Change C3",
            max: "100",
            min: "0",
            type: "byte",
            units: "%",
            value: "10",
            Help:
              "\n\t\t\t\tPercentage change in wattage to induce a automatic report (Clamp 3).\n\t\t\t",
          },
          {
            genre: "config",
            index: "13",
            label: "Reporting CRC-16 Encapsulation Command",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help:
              "\n\t\t\t\tEnable /disable reporting CRC-16 Encapsulation Command.\n\t\t\t",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            affects: "101,102,103",
            genre: "config",
            index: "100",
            label: "Reset #101-103",
            type: "button",
            write_only: "true",
            Help:
              "\n\t\t\t\tReset to default parameters number 101-103. Any value other then 0 will initiate this reset.\n\t\t\t",
          },
          {
            genre: "config",
            index: "101",
            label: "Group 1 Reports",
            type: "int",
            units: "",
            value: "2",
            Help:
              "\n\t\t\t\tWhich reports need to send in group1. Format is as follows:\n\t\t\t\tByte 1 (msb):\n\t\t\t\tBit 7: Reserved\n\t\t\t\tBit 6: Reserved\n\t\t\t\tBit 5: Auto Send Meter Report (for kVar) at the group time interval (Clamp 3)\n\t\t\t\tBit 4: Auto Send Meter Report (for kVar) at the group time interval (Clamp 2)\n\t\t\t\tBit 3: Auto Send Meter Report (for kVar) at the group time interval (Clamp 1)\n\t\t\t\tBit 2: Auto Send Meter Report (for KVah) at the group time interval (Clamp 3)\n\t\t\t\tBit 1: Auto Send Meter Report (for KVah) at the group time interval (Clamp 2)\n\t\t\t\tBit 0: Auto Send Meter Report (for KVah) at the group time interval (Clamp 1)\n\t\t\t\tByte 2:\n\t\t\t\tBit 7: Reserved\n\t\t\t\tBit 6: Reserved\n\t\t\t\tBit 5: Auto Send Meter Report (for A) at the group time interval (Clamp 3)\n\t\t\t\tBit 4: Auto Send Meter Report (for A) at the group time interval (Clamp 2)\n\t\t\t\tBit 3: Auto Send Meter Report (for A) at the group time interval (Clamp 1)\n\t\t\t\tBit 2: Auto Send Meter Report (for V) at the group time interval (Clamp 3)\n\t\t\t\tBit 1: Auto Send Meter Report (for V) at the group time interval (Clamp 2)\n\t\t\t\tBit 0: Auto Send Meter Report (for V) at the group time interval (Clamp 1)\n\t\t\t\tByte 3:\n\t\t\t\tBit 7: Reserved\n\t\t\t\tBit 6: Reserved\n\t\t\t\tBit 5: Auto Send Meter Report (for kWh) at the group time interval (Clamp 3)\n\t\t\t\tBit 4: Auto Send Meter Report (for kWh) at the group time interval (Clamp 2)\n\t\t\t\tBit 3: Auto Send Meter Report (for kWh) at the group time interval (Clamp 1)\n\t\t\t\tBit 2: Auto Send Meter Report (for Watt) at the group time interval (Clamp 3)\n\t\t\t\tBit 1: Auto Send Meter Report (for Watt) at the group time interval (Clamp 2)\n\t\t\t\tBit 0: Auto Send Meter Report (for Watt) at the group time interval (Clamp 1)\n\t\t\t\tByte 4 (lsb):\n\t\t\t\tBit 7: Reserved\n\t\t\t\tBit 6: Reserved\n\t\t\t\tBit 5: Auto Send Meter Report (for kVar) at the group time interval (Whole HEM)\n\t\t\t\tBit 4: Auto Send Meter Report (for KVah) at the group time interval (Whole HEM)\n\t\t\t\tBit 3: Auto Send Meter Report (for A) at the group time interval (Whole HEM)\n\t\t\t\tBit 2: Auto Send Meter Report (for V) at the group time interval (Whole HEM)\n\t\t\t\tBit 1: Auto Send Meter Report (for Watt) at the group time interval (Whole HEM)\n\t\t\t\tBit 0: Auto Send Meter Report (for kWh) at the group time interval (Whole HEM)\n\t\t\t",
          },
          {
            genre: "config",
            index: "102",
            label: "Group 2 Reports",
            type: "int",
            units: "",
            value: "1",
            Help:
              "\n\t\t\t\tWhich reports need to send in group2. Format is as follows:\n\t\t\t\tByte 1 (msb):\n\t\t\t\tBit 7: Reserved\n\t\t\t\tBit 6: Reserved\n\t\t\t\tBit 5: Auto Send Meter Report (for kVar) at the group time interval (Clamp 3)\n\t\t\t\tBit 4: Auto Send Meter Report (for kVar) at the group time interval (Clamp 2)\n\t\t\t\tBit 3: Auto Send Meter Report (for kVar) at the group time interval (Clamp 1)\n\t\t\t\tBit 2: Auto Send Meter Report (for KVah) at the group time interval (Clamp 3)\n\t\t\t\tBit 1: Auto Send Meter Report (for KVah) at the group time interval (Clamp 2)\n\t\t\t\tBit 0: Auto Send Meter Report (for KVah) at the group time interval (Clamp 1)\n\t\t\t\tByte 2:\n\t\t\t\tBit 7: Reserved\n\t\t\t\tBit 6: Reserved\n\t\t\t\tBit 5: Auto Send Meter Report (for A) at the group time interval (Clamp 3)\n\t\t\t\tBit 4: Auto Send Meter Report (for A) at the group time interval (Clamp 2)\n\t\t\t\tBit 3: Auto Send Meter Report (for A) at the group time interval (Clamp 1)\n\t\t\t\tBit 2: Auto Send Meter Report (for V) at the group time interval (Clamp 3)\n\t\t\t\tBit 1: Auto Send Meter Report (for V) at the group time interval (Clamp 2)\n\t\t\t\tBit 0: Auto Send Meter Report (for V) at the group time interval (Clamp 1)\n\t\t\t\tByte 3:\n\t\t\t\tBit 7: Reserved\n\t\t\t\tBit 6: Reserved\n\t\t\t\tBit 5: Auto Send Meter Report (for kWh) at the group time interval (Clamp 3)\n\t\t\t\tBit 4: Auto Send Meter Report (for kWh) at the group time interval (Clamp 2)\n\t\t\t\tBit 3: Auto Send Meter Report (for kWh) at the group time interval (Clamp 1)\n\t\t\t\tBit 2: Auto Send Meter Report (for Watt) at the group time interval (Clamp 3)\n\t\t\t\tBit 1: Auto Send Meter Report (for Watt) at the group time interval (Clamp 2)\n\t\t\t\tBit 0: Auto Send Meter Report (for Watt) at the group time interval (Clamp 1)\n\t\t\t\tByte 4 (lsb):\n\t\t\t\tBit 7: Reserved\n\t\t\t\tBit 6: Reserved\n\t\t\t\tBit 5: Auto Send Meter Report (for kVar) at the group time interval (Whole HEM)\n\t\t\t\tBit 4: Auto Send Meter Report (for KVah) at the group time interval (Whole HEM)\n\t\t\t\tBit 3: Auto Send Meter Report (for A) at the group time interval (Whole HEM)\n\t\t\t\tBit 2: Auto Send Meter Report (for V) at the group time interval (Whole HEM)\n\t\t\t\tBit 1: Auto Send Meter Report (for Watt) at the group time interval (Whole HEM)\n\t\t\t\tBit 0: Auto Send Meter Report (for kWh) at the group time interval (Whole HEM)\n\t\t\t",
          },
          {
            genre: "config",
            index: "103",
            label: "Group 3 Reports",
            type: "int",
            units: "",
            value: "0",
            Help:
              "\n\t\t\t\tWhich reports need to send in group3. Format is as follows:\n\t\t\t\tByte 1 (msb):\n\t\t\t\tBit 7: Reserved\n\t\t\t\tBit 6: Reserved\n\t\t\t\tBit 5: Auto Send Meter Report (for kVar) at the group time interval (Clamp 3)\n\t\t\t\tBit 4: Auto Send Meter Report (for kVar) at the group time interval (Clamp 2)\n\t\t\t\tBit 3: Auto Send Meter Report (for kVar) at the group time interval (Clamp 1)\n\t\t\t\tBit 2: Auto Send Meter Report (for KVah) at the group time interval (Clamp 3)\n\t\t\t\tBit 1: Auto Send Meter Report (for KVah) at the group time interval (Clamp 2)\n\t\t\t\tBit 0: Auto Send Meter Report (for KVah) at the group time interval (Clamp 1)\n\t\t\t\tByte 2:\n\t\t\t\tBit 7: Reserved\n\t\t\t\tBit 6: Reserved\n\t\t\t\tBit 5: Auto Send Meter Report (for A) at the group time interval (Clamp 3)\n\t\t\t\tBit 4: Auto Send Meter Report (for A) at the group time interval (Clamp 2)\n\t\t\t\tBit 3: Auto Send Meter Report (for A) at the group time interval (Clamp 1)\n\t\t\t\tBit 2: Auto Send Meter Report (for V) at the group time interval (Clamp 3)\n\t\t\t\tBit 1: Auto Send Meter Report (for V) at the group time interval (Clamp 2)\n\t\t\t\tBit 0: Auto Send Meter Report (for V) at the group time interval (Clamp 1)\n\t\t\t\tByte 3:\n\t\t\t\tBit 7: Reserved\n\t\t\t\tBit 6: Reserved\n\t\t\t\tBit 5: Auto Send Meter Report (for kWh) at the group time interval (Clamp 3)\n\t\t\t\tBit 4: Auto Send Meter Report (for kWh) at the group time interval (Clamp 2)\n\t\t\t\tBit 3: Auto Send Meter Report (for kWh) at the group time interval (Clamp 1)\n\t\t\t\tBit 2: Auto Send Meter Report (for Watt) at the group time interval (Clamp 3)\n\t\t\t\tBit 1: Auto Send Meter Report (for Watt) at the group time interval (Clamp 2)\n\t\t\t\tBit 0: Auto Send Meter Report (for Watt) at the group time interval (Clamp 1)\n\t\t\t\tByte 4 (lsb):\n\t\t\t\tBit 7: Reserved\n\t\t\t\tBit 6: Reserved\n\t\t\t\tBit 5: Auto Send Meter Report (for kVar) at the group time interval (Whole HEM)\n\t\t\t\tBit 4: Auto Send Meter Report (for KVah) at the group time interval (Whole HEM)\n\t\t\t\tBit 3: Auto Send Meter Report (for A) at the group time interval (Whole HEM)\n\t\t\t\tBit 2: Auto Send Meter Report (for V) at the group time interval (Whole HEM)\n\t\t\t\tBit 1: Auto Send Meter Report (for Watt) at the group time interval (Whole HEM)\n\t\t\t\tBit 0: Auto Send Meter Report (for kWh) at the group time interval (Whole HEM)\n\t\t\t",
          },
          {
            affects: "111,112,113",
            genre: "config",
            index: "110",
            label: "Reset #111-113",
            type: "button",
            units: "",
            value: "0",
            write_only: "true",
            Help: "Reset to default parameters number 111-113",
          },
          {
            genre: "config",
            index: "111",
            label: "Group 1 Interval",
            type: "int",
            units: "seconds",
            value: "5",
            Help: "The interval of sending report group 1.",
          },
          {
            genre: "config",
            index: "112",
            label: "Group 2 Interval",
            type: "int",
            units: "seconds",
            value: "120",
            Help: "The interval of sending report group 2",
          },
          {
            genre: "config",
            index: "113",
            label: "Group 3 Interval",
            type: "int",
            units: "seconds",
            value: "120",
            Help: "The interval of sending report group 3",
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
              { label: "Other", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "252",
            label: "Lock/Unlock Configuration",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Lock/ unlock all configuration parameters",
            Item: [
              { label: "Unlock", value: "0" },
              { label: "Lock", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "255",
            label: "Reset To Factory Defaults",
            size: "4",
            type: "list",
            value: "1",
            write_only: "true",
            Help: "Reset to factory defaults",
            Item: [
              { label: "Reset to factory default setting", value: "0" },
              { label: "Normal", value: "1" },
              {
                label:
                  "Reset to factory default setting and removed from the z-wave network",
                value: "1431655765",
              },
            ],
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
