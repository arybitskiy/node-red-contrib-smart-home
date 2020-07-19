import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 6,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0109:2101:2021",
            name: "OzwInfoPage",
          },
          { text: "images/vision/zp3111.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2479/",
            id: "2101",
            name: "ZWProductPage",
            type: "2021",
          },
          {
            text: "CEPT (Europe) / U.S. / Canada / Mexico / Japan",
            id: "2101",
            name: "FrequencyName",
            type: "2021",
          },
          {
            text:
              "To add the ZP3111 to the Z-Wave network (inclusion), place the Z-Wave primary controller into inclusion mode.  Press the Program Switch of ZP3111 for sending the NIF. After sending NIF, Z-Wave will send the auto inclusion, otherwise, ZP3111 will go to sleep after 20 seconds.",
            name: "InclusionDescription",
          },
          {
            text:
              "To remove the ZP3111 from the Z-Wave network (exclusion), place the Z-Wave primary controller into “exclusion” mode, and following its instruction to delete the ZP3111 to the controller.  Press the Program Switch of ZP3111 once to be excluded.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Use “Wake Up” command to set up the awaking time (from 10 minutes to 1 week) and send the wake up notification to controller",
            name: "WakeupDescription",
          },
          {
            text:
              "Remove cover to trigged tamper switch, LED flash once & send out Alarm Report.  Press Program Switch 10 times within 10 seconds, ZP3111 will send the “Device Reset Locally Notification” command and reset to the factory default. (Remark: This is to be used only in the case of primary controller being inoperable or otherwise unavailable.)",
            name: "ResetDescription",
          },
          { text: "ZP3111JP-5", id: "2101", name: "Identifier", type: "2021" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2479/ZP3111-5_R2_20170316.pdf",
            name: "ProductManual",
          },
          { text: "4in1 PIR Sensor", name: "Name" },
          {
            text:
              "* Includes Motion, Temperature, Humidity, and Light sensor\n* 360 degree detection (suitable for ceiling fixture)\n* Compact Size: 59*59*41mm\n* 2*AAA Battery\n* Low Battery Detection\n* LED Status Indicator\n* 100feet line of sight",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1572/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "23 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1744/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2479/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 6,
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
            label: "Temperature Unit",
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
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Motion Sensor Re-trigger Duration",
            max: "255",
            min: "1",
            type: "byte",
            units: "min",
            value: "3",
            Help:
              "\n                Value from 1 to 255 minutes to setup the re-trigger time when there is no movement detected in the period of time.\n            ",
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label: "Motion Sensor Sensitivity Adjustment",
            max: "7",
            min: "1",
            type: "byte",
            units: "",
            value: "4",
            Help:
              "\n                Sensitivity of the integrated PIR sensor.\n                1 to 7 ( 1 = Most Sensitive )\n            ",
          },
          {
            genre: "config",
            index: "7",
            instance: "1",
            label: "LED Mode",
            max: "3",
            min: "1",
            type: "byte",
            units: "",
            value: "3",
            Help:
              "\n\t\t1 - Turn Off LED\n\t\t2 - Breathing Light Mode (High Battery Consumption)\n\t\t3 - Quick Flash on Sensor Reporting or Motion Trigger\n            ",
          },
        ],
      },
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
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
