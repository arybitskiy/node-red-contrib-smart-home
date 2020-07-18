import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0086:000E:0003",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/dsc14104.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1623/",
            id: "000E",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text: "DSC14104-ZWUS",
            id: "000E",
            name: "Identifier",
            type: "0003",
          },
          { text: "Micro Motor Controller", name: "Description" },
          {
            text: "Aeon Labs Micro Motor Controller DSC14104 ZWUS",
            name: "Name",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "000E",
            name: "FrequencyName",
            type: "0003",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1623/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
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
            label: "Motor start delay time",
            size: "4",
            type: "int",
            units: "ms",
            value: "0",
            Help: "Motor start delay time (ms)",
          },
          {
            genre: "config",
            index: "5",
            label: "Opening time",
            size: "2",
            type: "short",
            units: "ms",
            value: "5000",
            Help:
              "\n\t  Total time from endpoint of close go to endpoint of opening (ms).\n\t  This value set 0x00000000, will use the time of last calibration.\n\t  Default 5 seconds",
          },
          {
            genre: "config",
            index: "6",
            label: "Closing time",
            size: "2",
            type: "short",
            units: "ms",
            value: "5000",
            Help:
              "\n\t  Total time from endpoint of opening go to endpoint of close (ms).\n\t  This value set 0x00000000, will use the time of last calibration.\n\t  Default 5 seconds",
          },
          {
            genre: "config",
            index: "7",
            label: "Motor status after power on",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "Motor status after power on",
            Item: [
              { label: "Motor keep still (Default)", value: "0" },
              { label: "Open Motor", value: "1" },
              { label: "Close Motor", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "8",
            label: "Set count of External Button/Switch",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "\n\t  Set count of External Button/Switch\n\t  Note: Single External Button must connect to ST and COM port.\n\t  ",
            Item: [
              { label: "0=Three External Button/Switch (Default)", value: "0" },
              { label: "Single External Button", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "80",
            label: "Notification status",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "Enable automatic notifications to associated group Reports devices whenever there is a state change",
            Item: [
              { label: "Nothing", value: "0" },
              { label: "Hail", value: "1" },
              { label: "Basic", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "120",
            label: "Control mode",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "Set External Switch/Button Control mode",
            Item: [
              { label: "Momentary button mode", value: "0" },
              { label: "2 state switch mode", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "254",
            label: "Device tag",
            max: "65535",
            min: "0",
            type: "short",
            units: "",
            value: "0",
            Help: "Device tag.",
          },
          {
            genre: "config",
            index: "255",
            label: "Reset device",
            type: "button",
            units: "",
            write_only: "true",
            Help: "Reset to the default configuration.",
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
