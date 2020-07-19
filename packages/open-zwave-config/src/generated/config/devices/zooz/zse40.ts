import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/027A:2101:2021",
            name: "OzwInfoPage",
          },
          { text: "images/zooz/zse40.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1804/",
            id: "2101",
            name: "ZWProductPage",
            type: "2021",
          },
          {
            text:
              "To remove theZSE40 from the Z-Wave network (exclusion), place the Z-Wave primary controller into “exclusion” mode and follow its instruction to delete the ZSE40 to the controller.  Press the Program Switch of ZSE40 once to be excluded.",
            name: "ExclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1804/ZSE40-USER-MANUAL-5-13-16.pdf",
            name: "ProductManual",
          },
          { text: "ZSE40", id: "2101", name: "Identifier", type: "2021" },
          {
            text:
              "To add the ZSE40 to the Z-Wave network (inclusion), place the Z-Wave primary controller into inclusion mode.  Press the Program Switch of ZSE40 for sending the NIF. After sending NIF, Z-Wave will send the auto inclusion, otherwise, ZSE40 will go to sleep after 20 seconds.",
            name: "InclusionDescription",
          },
          {
            text:
              "Use “Wake Up” command to set up the awaking time (from 10 minutes to 1 week) and send the wake up notification to controller",
            name: "WakeupDescription",
          },
          { text: "4-in-1 Sensor", name: "Name" },
          {
            text:
              "Enjoy 4 smart sensors in 1 compact device. Monitor motion, temperature, humidity, and light level.\nThis is a secure device using 128-bit signal encryption. It requires a security enabled gateway controller for full functionality.\nThe Zooz 4-in-1 sensor is packed with advanced features:\n- 7 levels of motion sensitivity to choose from\n- 3 modes for motion / temp led indicator notifications\n- Built-in tamper protection\n- Low battery alerts\n- Z-Wave Plus with improved 500 series chip for faster and safer wireless communication\n\nZ-Wave Frequency: 908.42 MHz (US)\nPower: 2 AAA batteries\nWireless Range: Up to 100 feet line of sight\nOperating Temperature: 5° - 104°F\nInstallation: Indoor Use Only\n1 Year Warranty",
            name: "Description",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "2101",
            name: "FrequencyName",
            type: "2021",
          },
          {
            text:
              "Remove cover to trigged tamper switch, LED flash once & send out Alarm Report.  Press Program Switch 10 times within 10 seconds, ZSE40 will send the “Device Reset Locally Notification” command and reset to the factory default. (Remark: This is to be used only in the case of primary controller being inoperable or otherwise unavailable.)",
            name: "ResetDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1804/xml",
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
            label: "Temperature Scale",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help:
              "\n                Temperature scale (Celsius or Fahrenheit (default)).\n            ",
            Item: [
              { label: "Celsius", value: "0" },
              { label: "Fahrenheit", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "2",
            label: "Temperature Change Notif",
            max: "50",
            min: "1",
            type: "byte",
            units: "0.1 degree",
            value: "10",
            Help:
              "\n                Minimum temperature change that will trigger a report to the controller, in 0.1 degrees. 10 = 1.0 degrees (default).\n            ",
          },
          {
            genre: "config",
            index: "3",
            label: "Humidity Change Notif",
            max: "50",
            min: "1",
            type: "byte",
            units: "%",
            value: "10",
            Help:
              "\n                Minimum humidity change (%) that will trigger a report to the controller. 10 = 10% (default).\n            ",
          },
          {
            genre: "config",
            index: "4",
            label: "Light Change Notif",
            max: "50",
            min: "5",
            type: "byte",
            units: "%",
            value: "10",
            Help:
              "\n                Minimum light sensor change (%) that will trigger a report to the controller. 10 = 10% (default).\n            ",
          },
          {
            genre: "config",
            index: "5",
            label: "Motion Sensor Trigger Interval",
            max: "60",
            min: "15",
            type: "byte",
            units: "second",
            value: "15",
            Help:
              "\n                After initial motion, sensor will wait this long before reporting again. 15 = 15 seconds (default); 60 = 60 seconds.\n            ",
          },
          {
            genre: "config",
            index: "6",
            label: "Motion Sensor Sensitivity",
            max: "7",
            min: "1",
            size: "1",
            type: "list",
            units: "",
            value: "4",
            Help: "\n                Motion sensor sensitivity.\n            ",
            Item: [
              { label: "Very High", value: "1" },
              { label: "High", value: "2" },
              { label: "Somewhat High", value: "3" },
              { label: "Normal", value: "4" },
              { label: "Somewhat Low", value: "5" },
              { label: "Low", value: "6" },
              { label: "Very Low", value: "7" },
            ],
          },
          {
            genre: "config",
            index: "7",
            label: "LED indicator mode",
            max: "4",
            min: "1",
            size: "1",
            type: "list",
            units: "",
            value: "4",
            Help:
              "\n                Color LED behavior. 1 = LED off; 2 = pulsing light for temperature, flashing light for motion (high battery drain); 3 = flashing light for temperature and motion (default); 4 = flashing light for motion.\n            ",
            Item: [
              { label: "Off", value: "1" },
              { label: "Pulse Temp/Flash Motion", value: "2" },
              { label: "Flash Temp & Motion", value: "3" },
              { label: "Flash Motion", value: "4" },
            ],
          },
        ],
        Compatibility: "",
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "5" }],
          },
        ],
        Compatibility: "",
      },
    ],
  },
};

export default config;
