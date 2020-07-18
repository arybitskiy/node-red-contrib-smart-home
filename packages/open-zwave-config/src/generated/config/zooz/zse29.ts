import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/027A:0005:0001",
            name: "OzwInfoPage",
          },
          { text: "images/zooz/zse29.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3081/",
            id: "0005",
            name: "ZWProductPage",
            type: "0001",
          },
          {
            text:
              "FEATURES:\n- Quick and reliable motion alerts to Z-Wave hub\n- Outdoor ready housing (avoid direct sun and rain)\n- Set motion time-out and lux trigger at the sensor\n- Auto-inclusion for easy set-up\n- The latest S2 security and Z-Wave Plus chip\n- Powered by common batteries or Micro USB\n- Built-in tamper switch for extra security\n\nSPECS:\n- Model Number: ZSE29\n- Z-Wave Signal Frequency: 908.42 MHz\n- Power: 3 x AA (1.5 V) batteries / Micro USB\n- Motion Detection: up to 30 feet\n- Operating Temperature: -4 – 104 F\n- Warm-up time: 1 minute\n- Range: Up to 130 feet line of sight\n- Installation and Use: Indoor / Outdoor",
            name: "Description",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/3081/zooz-z-wave-plus-s2-outdoor-motion-sensor-zse29-manual.pdf",
            name: "ProductManual",
          },
          {
            text:
              "The sensor’s wake-up interval is set to 4 hours by default to save battery life. Use the Wake Up Command Class to adjust the interval (in seconds, working in 600s intervals, with 600 as min and 86400 as max values).\nDuring wake-up, the sensor turns the Z-Wave radio on for 10 seconds to receive communication from the hub. Long wake-up interval will not affect how often the sensor reports motion to your hub.",
            name: "WakeupDescription",
          },
          { text: "Outdoor Motion Sensor", name: "Name" },
          {
            text: "U.S. / Canada / Mexico",
            id: "0005",
            name: "FrequencyName",
            type: "0001",
          },
          {
            text:
              "1. Bring the sensor within direct range of your Z-Wave\ngateway (hub).\n2. Put the Z-Wave hub into exclusion mode (not sure\nhow to do that? ask@getzooz.com).\n3. Press and release the tamper switch 3 times quickly.\n4. Your hub will confirm exclusion and the sensor will\ndisappear from your controller's device list.",
            name: "ExclusionDescription",
          },
          {
            text:
              "AUTO-INCLUSION:\n1. Initiate inclusion (pairing) in the app (or web interface). Not Sure how? ask@getzooz.com. If you’re using an S2 hub, it may ask you to enter the DSK key printed on the back cover sticker to complete secure inclusion.\n2. Insert the batteries or the USB adapter board. The LED indicator\nwill start blinking and the sensor will join the network Automatically.\n\nMANUAL INCLUSION:\nPut your Z-Wave hub into inclusion mode and click the tamper switch 3 times quickly.",
            name: "InclusionDescription",
          },
          {
            text:
              "When your network’s primary controller is missing or otherwise inoperable, you may need to reset the device to factory settings manually. In order to complete the process, make sure the sensor is powered, then CLICKCLICK-CLICK-CLICK’N’HOLD the tamper switch for AT LEAST 5 SECONDS. The LED indicator will turn off to\nindicate successful reset. The sensor will then enter auto-inclusion mode for 4 minutes.\nNOTE: All previously recorded activity and custom settings will be erased from the device’s memory.",
            name: "ResetDescription",
          },
          { text: "ZSE29", id: "0005", name: "Identifier", type: "0001" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3081/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 2,
              },
              {
                text: "Updated for firmware version 2.0",
                author: "Brad Parker - https://github.com/bepsoccer",
                date: "27 May 2020",
                revision: 3,
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
            type: "byte",
            genre: "config",
            index: "1",
            label: "Basic Set Report Value Sent to Associated Devices",
            size: "1",
            min: "0",
            max: "99",
            value: "99",
            Help:
              " Set the value of basic set report sent to the light associated with the sensor in Group 2 (so the light turns on to the selected brightness level). 99 is the equivalent of full brightness in Z-Wave terms.\n      default: 99\n      ",
          },
          {
            type: "list",
            genre: "config",
            index: "2",
            label: "Enable / Disable Motion Reports",
            size: "1",
            min: "0",
            max: "1",
            value: "1",
            Help:
              "Enable or disable motion reports completely. If motion sensor is disabled, the device will not report motion at all to your hub.",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled (default)", value: "1" },
            ],
          },
          {
            type: "byte",
            genre: "config",
            index: "3",
            label: "Motion Sensativity",
            size: "1",
            min: "1",
            max: "10",
            value: "10",
            Help:
              "Adjust motion sensitivity where 10 is the most sensative setting.\n      default: 10\n      ",
          },
          {
            type: "short",
            genre: "config",
            index: "4",
            label: "Lux Level Trigger",
            size: "2",
            min: "0",
            max: "900",
            value: "0",
            Help:
              "Set lux level trigger with 10 being the lowest reported value.  The sensor will report motion to the hub and associated devices only if lux level is below the set value.\n      0 - set manually by lux knob; (default)\n      1 - ignore lux and always report motion;\n      ",
          },
          {
            type: "short",
            genre: "config",
            index: "5",
            label: "Motion Re-trigger Time",
            size: "2",
            min: "0",
            max: "720",
            value: "0",
            units: "seconds",
            Help:
              "Set motion re-trigger time for the delay before the sensor reports no motion to the hub and associated devices after detecting the last motion activity.\n      0 - set manually by timer knob; (default)\n      5-720 (seconds) - set customer re-trigger time;\n      ",
          },
          {
            type: "short",
            genre: "config",
            index: "6",
            label: "Lux Reporting Frequency",
            size: "2",
            min: "1",
            max: "1440",
            value: "30",
            units: "minutes",
            Help:
              "Set lux reporting frequency to decide how often the snesor will measure and send brightness level data to the hub and associated devices.\n      default: 30 (minutes)\n      ",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              { index: "2", label: "PIR Control", max_associations: "4" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
