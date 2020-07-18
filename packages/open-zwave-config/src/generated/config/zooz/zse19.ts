import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/027A:0003:000C",
            name: "OzwInfoPage",
          },
          { text: "images/zooz/zse19.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3116/",
            id: "0003",
            name: "ZWProductPage",
            type: "000C",
          },
          { text: "S2 Multisiren", name: "Name" },
          {
            text:
              "If your primary controller is missing or inoperable, you may need to reset the device to factory settings. To complete the reset process manually, make sure the Multisiren is powered, then CLICK-CLICK-CLICKCLICK’N’HOLD the Z-Wave button for AT LEAST 5 SECONDS. The LED indicator will flash to confirm successful reset. \nNOTE: All previously recorded activity and custom settings will be erased from the device’s memory.",
            name: "ResetDescription",
          },
          {
            text:
              "1. Bring the Multisiren within direct range of your Z-Wave gateway (hub).\n2. Put the Z-Wave hub into exclusion mode (not sure how to do that? ask@getzooz.com).\n3. Click the Z-Wave button on the Multisiren 3 times quickly to finalize the process.\n4. Your hub will confirm exclusion and the device will disappear from your controller's device list.",
            name: "ExclusionDescription",
          },
          {
            text:
              "FEATURES:\n- Audio and visual alarm triggered by other Z-Wave devices\n- Configurable siren alarm duration\n- Built-in temperature and humidity sensor (if Multilevel Sensor is supported)\n- Audio Speaker for custom sound playback (if Sound Switch is supported)\n- S2 security protocol and the latest 500 Z-Wave chip for faster and safer wireless communication\n- Tamper protection, low-battery alerts\n\nSPECS:\n- Model Number: ZSE19\n- Z-Wave Signal Frequency: 908.42 MHz\n- Power: 4 x LR14 (C Cell) battery\n- Range: Up to 100 feet line of sight\n- Operating Temperature: 14-104° F (-10-40° C)\n- Operating Humidity: 0-80%\n- Installation and Use: Indoor only",
            name: "Description",
          },
          {
            text:
              "AUTO INCLUSION:\n1. Initiate inclusion (pairing) in the app (or web interface). Not sure how? ask@getzooz.com\nIf you’re using an S2 hub, it may ask you to enter the DSK key printed on the back cover sticker to complete secure inclusion.\n\n2. Insert the batteries as instructed above (if you already did, take them out for at least 15 seconds before starting the inclusion process). The LED indicator will start blinking and the Multisiren will join the network automatically.\n\nMANUAL INCLUSION:\nPut your Z-Wave hub into inclusion mode and click the Z-Wave button on the Multisiren 3 times quickly.",
            name: "InclusionDescription",
          },
          { text: "ZSE19", id: "0003", name: "Identifier", type: "000C" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/3116/zooz-z-wave-plus-s2-multisiren-zse19-manual.pdf",
            name: "ProductManual",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0003",
            name: "FrequencyName",
            type: "000C",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3116/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
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
            label: "Siren Alarm Duration",
            max: "600",
            min: "10",
            size: "2",
            type: "short",
            units: "seconds",
            value: "600",
            Help:
              "Siren Alarm Duration, in seconds.  Defaults to 600 (10 minutes).",
          },
          {
            genre: "config",
            index: "2",
            label: "Temp/Humidity Reporting Interval",
            max: "1440",
            min: "1",
            size: "2",
            type: "short",
            units: "minutes",
            value: "1440",
            Help:
              "Reporting interval for temperature and humidity sensor, in miuntes.  Defaults to 1440 (24 hours).",
          },
          {
            genre: "config",
            index: "3",
            label: "Custom Sound Selection for Audio Speaker",
            max: "99",
            min: "0",
            size: "1",
            type: "byte",
            units: "",
            value: "0",
            Help:
              "Selector for custom audio files that have been manually uploaded to the alarm unit.  0 sets to no sound (default), while 1-99 selects the sound file number in the library to be used.",
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
