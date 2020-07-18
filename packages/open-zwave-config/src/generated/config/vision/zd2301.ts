import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0109:1F20:201F",
            name: "OzwInfoPage",
          },
          { text: "images/zipato/zd2301.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2346/",
            id: "1F20",
            name: "ZWProductPage",
            type: "201F",
          },
          {
            text:
              "Press the Program SW, the LED will flash one time and ZD2301 will send “Wake Up Notification” after 5 seconds. If ZD2301 received “Wake Up No More Information” command then the ZD2301 will go to sleep or it will wait 10 seconds then go to sleep. It will precede all the commands after sending the “Wake Up Notification”",
            name: "WakeupDescription",
          },
          {
            text: "CEPT (Europe)",
            id: "1F20",
            name: "FrequencyName",
            type: "201F",
          },
          {
            text:
              "All user and network settings will be cleared and the device reset to factory\ndefaults when the device is excluded.\n\nPlease use this procedure only in the event if the network\ncontroller is missing or is otherwise inoperable.",
            name: "ResetDescription",
          },
          { text: "Zipato 4 in 1 Door Sensor", name: "Name" },
          {
            text:
              "Put the Z-WaveTM Interface\nController into “exclusion” mode, and following its instruction to delete the ZD2301 from your controller. Press the program switch of ZD2301 for 1 second at least to be excluded.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Door/Window, humidity, temperature and luminance sensor. \n* Primarily used as dry contact door/window sensor.\n* Very low power consumption\n* LED indicator\n* Easy installation",
            name: "Description",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2346/zp2301.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Put the Z-WaveTM Interface Controller into\n“inclusion” mode, and following its instruction to add the ZD2301 to your controller. To get in the “inclusion” mode, the distance between sensor and controller is suggested to be one meter. Press the program switch of ZD2301 for sending the NIF. After sending NIF, Z-Wave will send the auto inclusion; otherwise, ZD2301 will go to sleep after 20 seconds.",
            name: "InclusionDescription",
          },
          {
            text: "vs-zd2301.eu",
            id: "1F20",
            name: "Identifier",
            type: "201F",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1334/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2346/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
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
            label: "Temperature unity",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "",
            Item: [
              { label: "Celsius", value: "0" },
              { label: "Fahrenheit", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Temperature Reporting Threshold",
            max: "50",
            min: "1",
            type: "byte",
            value: "1",
            Help:
              "Threshold change in temperature to induce an automatic report.\n            1 to 50 ( Set up from 0.1C to 5C)\n            ",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Humidity Reporting Threshold",
            max: "50",
            min: "1",
            type: "byte",
            units: "%",
            value: "10",
            Help:
              "Threshold change in humidity to induce an automatic report.\n            1 to 50 ( Set up from 1%-50%)\n            ",
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Luminance Reporting Threshold",
            max: "50",
            min: "0",
            type: "byte",
            units: "%",
            value: "10",
            Help:
              "\n                Threshold change in luminance to induce an automatic report.\n                0 is disabled.\n                5 to 50 ( Set up from 5%-50%)\n            ",
          },
        ],
      },
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      { id: "113", Compatibility: [{ GetSupported: [false] }] },
      { id: "30", Compatibility: [{ GetSupported: [false] }] },
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
