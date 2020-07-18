import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/000C:000B:0201",
            name: "OzwInfoPage",
          },
          { text: "images/homeseer/hs-fls100plus.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2947/",
            id: "000B",
            name: "ZWProductPage",
            type: "0201",
          },
          {
            text:
              "HS-FLS100+ is a Z-Wave enabled outdoor motion sensor that may be used for a variety of applications. \n\n• Use as a stand alone outdoor motion sensor and/or LUX sensor.\n• Use as a replacement sensor for a motion-activated floodlight unit. In this configuration, it can control floodlight loads when motion is sensed or when commands are received from the central controller.",
            name: "Description",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2947/HS-FLS100-user-manual2b-A501112779R.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Z-Wave auto inclusion.\nOr manual inclusion : put the Z-Wave controller into inclusion mode, press the Link button 3 times within 1.5 seconds to put the unit into inclusion mode.",
            name: "InclusionDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "000B",
            name: "FrequencyName",
            type: "0201",
          },
          {
            text:
              "Put the Z-Wave Controller into exclusion mode. Press the Link button 3 times within 1.5 seconds to put the unit into exclusion mode.",
            name: "ExclusionDescription",
          },
          {
            text: "HomeSeer HS-FLS100+ Z-Wave Plus Floodlight Sensor",
            name: "Name",
          },
          { text: "HS-FLS100+", id: "000B", name: "Identifier", type: "0201" },
          {
            text:
              "The product reset is to operate only when the primary controller is missing or inoperable. Press the Link button 3 times within 1.5 seconds to put the unit into exclusion mode.Within 1 second of step 1, press the Link button again and hold until LED is off (about 5 seconds).",
            name: "ResetDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2947/xml",
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
            instance: "1",
            label: "PIR Trigger Off Period",
            max: "720",
            min: "8",
            size: "2",
            type: "short",
            units: "seconds",
            value: "15",
            Help: "Period to send Trigger Off command after PIR is triggered.",
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Lux sensor threshold",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            units: "",
            value: "50",
            Help:
              "\n        When the lux level falls below this threshold and the PIR gets triggered, the unit emits a Basic Set Command (Value=0xFF) and turns on its floodlight. This overwrites the Lux level set by the Lux knob.\n\n        Setting = 0: Never turn ON light when PIR triggered\n        Setting = 30~200: Turn ON light when lux is below configured threshold.\n        Setting = 255: Always turn ON light when PIR triggered\n\n        If the level is set to 0, the unit will not turn on its floodlight. The sensor will only send a notification report to the controller.\n      ",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Auto Report luminance interval",
            max: "1440",
            min: "0",
            size: "2",
            type: "short",
            units: "minutes",
            value: "10",
            Help:
              "sets the interval of periodic lux level report to the controller",
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Basic Report",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help: "",
            Item: [
              { label: "Disable Basic Report", value: "0" },
              { label: "Enable Basic Report", value: "1" },
            ],
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
