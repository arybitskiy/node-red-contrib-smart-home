import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/027A:0085:0003",
            name: "OzwInfoPage",
          },
          { text: "images/zooz/zse30.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2204/",
            id: "0085",
            name: "ZWProductPage",
            type: "0003",
          },
          { text: "ZSE30", id: "0085", name: "Identifier", type: "0003" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2204/zooz-z-wave-plus-water-sensor-zse30-user-manual-online-v2.pdf",
            name: "ProductManual",
          },
          {
            text:
              "1. Bring the Water Sensor within direct range of your controller\n2. Carefully remove the cover from the sensor\n3. Remove the plastic pull-tab from the battery slot. The LED indicator will blink slowly 5 times\n4. Put your Z-Wave controller into inclusion mode\n5. Press and release the Z-Wave button on the Water Sensor 3 TIMES quickly. The LED indicator\n will flash quickly\n6. A new water (leak) sensor will appear on your controller's device list\n\nTroubleshooting Tips\nIf you are unable to include the Z-Wave Water Sensor to your controller, try one of the following:\n- Bring the sensor closer to your hub or use a hand-held secondary controller to perform inclusion\n- Once in inclusion mode, press and release the Z-Wave button quickly 6-7 TIMES to ensure the command has gone through \n- Put your controller in EXCLUSION mode. Press and release the Z-Wave button quickly 3 TIMES, and then try adding the sensor to your network again\n- You may need to change the device type manually if the sensor is not recognized correctly (email us for more info: ask@getzooz.com)",
            name: "InclusionDescription",
          },
          {
            text:
              "1. Make sure the Water Sensor is powered on and located within direct range of your Z-Wave gateway controller\n2. Put your Z-Wave controller in exclusion mode\n3. Press and release the Z-Wave button 3 TIMES quickly. The LED indicator will flash quickly \n4. The Water Sensor should disappear from your controller's device list\nIf the first attempt is unsuccessful, please repeat the process following all steps carefully.",
            name: "ExclusionDescription",
          },
          {
            text:
              "When your network’s primary controller is missing or otherwise inoperable, you may need to reset the device to factory settings manually. To complete the process, make sure the Water Sensor is powered on, then PRESS AND HOLD the Z-Wave button for AT LEAST 10 SECONDS until the LED indicator flashes ONCE. Release the button. NOTE: All previously recorded activity and custom settings will be erased from the device’s memory.",
            name: "ResetDescription",
          },
          {
            text:
              "Product features:\n- Reliable water and leak detection\n- Wireless notifications and event triggers (when included to a Z-Wave gateway controller)\n- Built-in audio and visual alarms\n- Low battery alerts\n- Z-Wave Plus with improved 500 chip for faster and safer wireless communication\n- Flexible installation with 2 mounting options\n\nSpecifications:\nModel Number: ZSE30 \nZ-Wave Signal Frequency: 908.42 MHz\nPower: 1 CR2 battery (included)\nPower Consumption: 0.13W\nOperating Temperature: 32 – 104 F\nRange: Up to 100 feet line of sight\nInstallation and Use: Indoor only\nDimensions: 2.5” x 0.9” \nWeight: 2 oz",
            name: "Description",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0085",
            name: "FrequencyName",
            type: "0003",
          },
          { text: "Zooz Z-Wave Plus Water Sensor", name: "Name" },
          {
            text:
              "If you change settings and parameters for the sensor, you may need to wake it up manually for the changes to be recorded. Press and release the Z-Wave button THREE TIMES to wake the device up. The LED indicator will flash ONCE.\nThe sensor’s wake-up interval is set to 12 hours by default to save battery life. Though not recommended, you can change the wake-up interval using your controller’s advanced settings if available. Minimum value: 300s (5 minutes), maximum value: 16,777,200s (around 194 days). Accepted values need to match minute intervals, so 300, 360, 420, etc.",
            name: "WakeupDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2204/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
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
            index: "1",
            label: "Alarm Duration",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            units: "minutes",
            value: "120",
            Help:
              "\n            Use this parameter to set the total duration of audio and visual alarm each time water is detected. \n            If the value is set to 0, the alarm will continue until water is no longer detected.\n            ",
          },
          {
            genre: "config",
            index: "2",
            label: "Audio Alarm Beep Interval",
            max: "255",
            min: "1",
            size: "1",
            type: "byte",
            units: "minutes",
            value: "1",
            Help:
              "\n            Set the beeping frequency for the sensors audio alarm.\n            The interval between beeps can be as low as 1 minute.\n          ",
          },
          {
            genre: "config",
            index: "3",
            label: "Audio Alarm First Beep Duration",
            max: "255",
            min: "10",
            size: "1",
            type: "byte",
            units: "seconds",
            value: "60",
            Help:
              "\n            Adjust the duration of the initial sound the alarm will produce after a leak is detected.\n          ",
          },
          {
            genre: "config",
            index: "4",
            label: "Audio Alarm Beep Duration",
            max: "255",
            min: "5",
            size: "1",
            type: "byte",
            units: "seconds",
            value: "5",
            Help:
              '\n            Adjust the duration of the beeps the alarm will sound after a leak is detected and the first "long" beep is produced.\n          ',
          },
          {
            genre: "config",
            index: "5",
            label: "Audio Alarm",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "\n        Enable or disable the audio alarm by adjusting this parameter setting. \n        The visual alarm will NOT be disabled and the LED indicator will always light up each time water is detected\n      ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "6",
            label: "Water Detection",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "\n        Enable or disable water detection for the sensor by adjusting this parameter setting..\n      ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "7",
            label: "Trigger Action",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "255",
            Help:
              "\n        You can choose if your Water Sensor turns an associated device on or off when sending the basic set command. \n        Use value 0 to turn the associated device OFF and value 255 to turn it ON.\n        Adjust brightness level for a Z-Wave dimmer (Multilevel switch) by putting in any value between 1 and 99. \n        Values: 0 - OFF; 1 - 99 (% of light); 255 - ON (default).\n      ",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "4",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "5" },
              { index: "2", label: "Control Command", max_associations: "5" },
              {
                index: "3",
                label: "Notification report",
                max_associations: "5",
              },
              {
                index: "4",
                label: "Binary sensor report",
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
