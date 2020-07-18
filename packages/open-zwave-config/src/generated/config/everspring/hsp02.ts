import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 7,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0060:0001:0001",
            name: "OzwInfoPage",
          },
          { text: "images/everspring/hsp02.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/606/",
            id: "0001",
            name: "ZWProductPage",
            type: "0001",
          },
          {
            text: "Malaysia / Hong Kong / CEPT (Europe) / CEPT (Europe)",
            id: "0001",
            name: "FrequencyName",
            type: "0001",
          },
          { text: "HSP02", id: "0001", name: "Identifier", type: "0001" },
          {
            text:
              "The motion detector is designed with dual detecting mode: security mode and home automation mode.In security mode, the detector can be used as a security device to detect movements. Z-Wave protocol to secure the success of wireless two way communication\nWith tamper-proof protection\nEasy install and can corner mount\nLow battery indication\nVery low power consumption (2 years battery life)\nAdjustable PIR detection pattern and sensitivity (pet immunity)\nBuilt in light sensor to simulate lighting control",
            name: "Description",
          },
          {
            text: "http://www.ctc-chromagic.com/?q=zwave/HSP02",
            name: "ProductPage",
          },
          { text: "Chromagic (HSP02) Motion Detector", name: "Name" },
          {
            text: "http://www.ctc-chromagic.com/?q=support",
            name: "ProductSupport",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/24/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/35/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/392/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 6,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/606/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 7,
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
            label: "Basic Set Level",
            max: "99",
            min: "0",
            type: "byte",
            units: "",
            value: "99",
            Help:
              "\n\tWhen Basic Set Command is sent where contains a value, the receiver will take it for consideration; for instance, if a lamp module is received the Basic Set Command of which value is decisive as to how bright of dim level of lamp module shall be.\n      ",
          },
          {
            genre: "config",
            index: "2",
            label: "Enable/Disable Detecting",
            max: "3",
            min: "0",
            type: "bool",
            value: "1",
            Help:
              "\n\tThe Detecting function can be Disabled of Enabled.\n      ",
          },
          {
            genre: "config",
            index: "3",
            label: "Sensitivity Level",
            max: "10",
            min: "1",
            type: "byte",
            units: "",
            value: "6",
            Help:
              "\n\t1 Means lowest sensitivity and 10 means highest.\n      ",
          },
          {
            genre: "config",
            index: "4",
            label: "Re-trigger Interval Setting",
            max: "3600",
            min: "5",
            type: "byte",
            units: "Seconds",
            value: "180",
            Help:
              "\n\tAdjust the interval of being re-triggered afer the detector has\tbeen triggered in seconds.\n      ",
          },
          {
            genre: "config",
            index: "5",
            label: "Lux Level",
            max: "100",
            min: "1",
            type: "byte",
            units: "%",
            value: "10",
            Help:
              "\n\tSets minimum Lux Level of ambient illumination necessary for Motion Detector to trigger.\n      ",
          },
          {
            genre: "config",
            index: "6",
            label: "On-Off Duration",
            max: "3600",
            min: "5",
            type: "byte",
            units: "Seconds",
            value: "15",
            Help:
              "\n\tThe duration determines how long before the module sends an Off after being triggered.\n      ",
          },
        ],
      },
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "Reports", max_associations: "1" },
              { index: "2", label: "Control", max_associations: "3" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
