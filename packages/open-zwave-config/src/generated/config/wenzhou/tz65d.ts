import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 6,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0118:0808:0808",
            name: "OzwInfoPage",
          },
          { text: "images/wenzhou/tz65d.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1362/",
            id: "0808",
            name: "ZWProductPage",
            type: "0808",
          },
          { text: "TZ35D", id: "0808", name: "Identifier", type: "0808" },
          { text: "TKB TZ35D Dimmer", name: "Name" },
          {
            text: "CEPT (Europe)",
            id: "0808",
            name: "FrequencyName",
            type: "0808",
          },
          { text: "Z-Wave dimmer switch", name: "Description" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1359/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1360/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1361/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1362/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
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
            instance: "1",
            label: "Set Ignore start level bit when transmitting dim commands",
            max: "1",
            min: "0",
            type: "byte",
            value: "1",
            Help:
              "If the bit is set to 1, the dimmer will ignore the start level and instead start dimming from its current level. If this bit is set to 0, the dimmer will not ignore the start level.",
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Disable transmitting to group 4",
            max: "1",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "Setting this parameter to the value of 1 will stop the TZ66D from transmitting to devices that are associated into Group 4.",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Night light",
            max: "1",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "The LED on the TZ65D will by default, turn ON when the load attached is turned OFF. To make the LED turn ON when the load attached is turned ON instead, set parameter to a value of 1.",
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Invert switch",
            max: "1",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "To change the top of the switch to OFF and the bottom of the switch ON , set parameter 4 to 1.",
          },
          {
            genre: "config",
            index: "14",
            instance: "1",
            label: "Enable shade control Group 2",
            max: "1",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "The TZ66D can operate shade control devices via its Group 2 if this configuration parameter is set to 1.",
          },
          {
            genre: "config",
            index: "15",
            instance: "1",
            label: "Enable shade control Group 3",
            max: "1",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "The TZ66D can operate shade control devices via its Group 3 if this configuration parameter is set to 1.",
          },
          {
            genre: "config",
            index: "19",
            instance: "1",
            label: "LED Transmission indication",
            max: "2",
            min: "0",
            type: "byte",
            value: "2",
            Help:
              "The TZ66-D will flicker its LED when it is transmitting to any of its 4 groups. This flickering can be set to not flicker at all (set to 0), to flicker the entire time it is transmitting (set to 1), or to flicker for only 1 second when it begins transmitting (set to 2). By default, the TZ66D is set to flicker for only 1 second.",
          },
          {
            genre: "config",
            index: "20",
            instance: "1",
            label: "Poll Group 2 Interval (minutes)",
            max: "255",
            min: "1",
            type: "byte",
            value: "2",
            Help:
              "The TZ66D can operate shade control devices via its Group 3 if this configuration parameter is set to 1.",
          },
          {
            genre: "config",
            index: "22",
            instance: "1",
            label: "Poll Group 2",
            max: "1",
            min: "0",
            type: "byte",
            value: "1",
            Help:
              "If value is 0, the TZ66D will not poll Group 2. If value is 1, the TZ66D will poll Group 2 at the interval set in Configuration Parameter 20.",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "4",
            Group: [
              {
                auto: "false",
                index: "1",
                label: "Group 1 Tap left paddle once",
                max_associations: "5",
              },
              {
                index: "2",
                label: "Group 2 Tap right paddle once",
                max_associations: "5",
              },
              {
                index: "3",
                label: "Group 3 Tap right paddle twice",
                max_associations: "5",
              },
              {
                auto: "true",
                index: "4",
                label: "Send updates every command",
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
