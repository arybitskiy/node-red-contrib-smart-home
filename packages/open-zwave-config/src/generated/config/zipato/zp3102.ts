import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0131:0205:2002",
            name: "OzwInfoPage",
          },
          { text: "images/zipato/zp3102.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1978/",
            id: "0205",
            name: "ZWProductPage",
            type: "2002",
          },
          {
            text:
              "It will be triggered after opening the front cover.\nRed LED will last 10 seconds and Multisensor Duo will send “Wake\nUp Notification” after 10 seconds.",
            name: "WakeupDescription",
          },
          {
            text:
              "Put your Z-Wave\nController into “inclusion” mode, and follow the instructions to add\nMultisensor Duo to your controller. To get in the “inclusion” mode,\nthe distance between sensor and controller should be up to 1 meter.\nPress the program switch of Multisensor Duo once. The LED on the\nsensor should stop flashing, if not, please try again.",
            name: "InclusionDescription",
          },
          {
            text: "U.S. / Canada / Mexico / CEPT (Europe)",
            id: "0205",
            name: "FrequencyName",
            type: "2002",
          },
          { text: "Zipato Multisensor Duo", name: "Name" },
          {
            text:
              "Remove cover to trigged tamper\nswitch, LED ON & send out Alarm Report. Press Program Switch\n10 times within 10 seconds. Multisensor Duo will send the “Device\nReset Locally Notification” command and reset to the factory\ndefault settings. \n\n(Remark: This is to be done only in case of primary\ncontroller being inoperable or otherwise unavailable.)",
            name: "ResetDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1978/manual.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Put your\nZ-Wave Controller into “exclusion” mode, and follow the instructions\nto remove the Multisensor Duo from you controller network. Press\nthe program switch of Multisensor Duo once to be excluded. The\nLED on the Multisensor Duo should start to flash.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Motion and temperature sensor in one device. Zipato\nMultisensor Duo offers elaborate security and ambient sensing\noptions. Multi-functional nature of this product allows you to detect\nmotion, and measure room temperature. When used with Zipato\nhome automation controllers it can be part of any automation\nscenario created using Zipato Rule Creator. Accordingly it can be\nused to automatically trigger other devices when activated.",
            name: "Description",
          },
          {
            text: "vs-zp3102+.eu",
            id: "0205",
            name: "Identifier",
            type: "2002",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1969/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1978/xml",
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
            label: "Re-Trigger Waiting Time",
            max: "255",
            min: "1",
            type: "byte",
            units: "minutes",
            value: "3",
            Help:
              "Time until an associated device will turn off if no new movement is detected",
          },
          {
            genre: "config",
            index: "2",
            label: "Celcius/Fahrenheit",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Report temperature in Celcius or Fahrenheit",
            Item: [
              { label: "Celcius", value: "0" },
              { label: "Fahrenheit", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "3",
            label: "Sensitivity",
            max: "7",
            min: "1",
            type: "byte",
            units: "",
            value: "4",
            Help:
              "Sensitivity 1-7 (1 = most sensitive, 7 = most insensitive. 4 is default)",
          },
          {
            genre: "config",
            index: "4",
            label: "Temperature adjustment",
            max: "255",
            min: "0",
            type: "byte",
            units: "Degrees Celsius",
            value: "0",
            Help: "-10 to -1, 0 to 10 (Signed decimal: 246 to 255, 0 to 10)",
          },
        ],
      },
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [
              {
                index: "1",
                label: "Basic on/off group for detecting movements",
                max_associations: "5",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
