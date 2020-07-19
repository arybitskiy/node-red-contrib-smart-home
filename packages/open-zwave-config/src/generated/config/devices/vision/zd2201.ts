import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0109:1F10:201F",
            name: "OzwInfoPage",
          },
          { text: "images/vision/zd2201.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2480/",
            id: "1F10",
            name: "ZWProductPage",
            type: "201F",
          },
          {
            text: "CEPT (Europe) / Japan",
            id: "1F10",
            name: "FrequencyName",
            type: "201F",
          },
          {
            text:
              "Factory Default Reset: \n*Open the rear cover to send the Alarm Report and then press the program switch 10 times in 10 seconds, ZD2301 will send the “Device Reset Locally” command and reset to the factory default. \n* Please use this procedure only in the event that the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "Use “Wake Up” command to set up the awaking time and send the wake up notification to controller.  User can use command to change the auto wake up from 10 minutes to 1 week, Interval increment is 3 minutes.",
            name: "WakeupDescription",
          },
          {
            text:
              "The Vision’s wireless 4 in 1 Multi-Sensor (door window contact sensor, humidity sensor, temperature sensor, and light sensor) of the home security device. This multi-sensor sends Z-Wave™ signal when door or window is opened and closed or humidity, temperature, luminous change.  When the device is secure included into Z-Wave network, above communication will be encrypted.",
            name: "Description",
          },
          { text: "ZD2201JP-5", id: "1F10", name: "Identifier", type: "201F" },
          { text: "4 in 1 Door Sensor", name: "Name" },
          {
            text:
              "For “Inclusion” in (adding to) a network: Put the Z-Wave™ Interface Controller into “inclusion” mode, and following its instruction to add the ZD2301 to your controller, to get in the “inclusion” mode. Press the program switch of ZD2301 for sending the NIF.  After sending NIF, Z-Wave will send the auto inclusion; otherwise, ZD2301 will go to sleep after 20 seconds.",
            name: "InclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2480/ZD 2201-5_R1_20150812.pdf",
            name: "ProductManual",
          },
          {
            text:
              "For “Exclusion” from (removing from) a network: Put the Z-Wave™ Interface Controller into “exclusion” mode, and following its instruction to delete the ZD2301 from your controller.  Press the program switch of ZD2301 for 1 second at least to be excluded.",
            name: "ExclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1566/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "23 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2480/xml",
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
