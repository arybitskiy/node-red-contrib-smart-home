import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0258:0082:0003",
            name: "OzwInfoPage",
          },
          { text: "images/shenzen_neo/nas-ds01z.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1668/",
            id: "0082",
            name: "ZWProductPage",
            type: "0003",
          },
          { text: "NAS-DS01Z", id: "0082", name: "Identifier", type: "0003" },
          { text: "Door Sensor", name: "Name" },
          {
            text:
              "Manual Wakeup the Sensor\n\nYou can press the button once to wake up the device and send wakeup notification to controller. If press successfully, the LED will blink one time.",
            name: "WakeupDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0082",
            name: "FrequencyName",
            type: "0003",
          },
          {
            text:
              "Note: to use the reset procedure only when the primary controller is missing or inoperable.\n\nRestore the Sensor (Door/Window detector) to Factory Default Settings\n\nReset procedure will delete all information on the Z-Wave network and Z-Wave controller or Z-Wave Gateway, and restore the sensor to factory default settings.\n1.Remove the device cover. \n\n2.Make sure the sensor is powered. \n\n3.Press and hold the button for 10 seconds, \n\n4.Release the button.",
            name: "ResetDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1782/Door-Window User Guide.doc",
            name: "ProductManual",
          },
          {
            text:
              "This product can be included and operated in any Z-Wave network with other Z-Wave certified devices from other manufacturers and/or other applications. All non-battery operated nodes within the network will act as repeaters regardless of vendor to increase reliability of the network.\n\nIn the front casing, there is button that is used to carry out include, exclude or reset factory default settings on PCB Board.\n\nWhen power is first supplied, the LED will flash on and off alternately at one second intervals within 5 seconds if the detector has not been added a Z-Wave network. Please get familiar with the terms below before starting the operations.",
            name: "Description",
          },
          {
            text:
              "Add the Sensor (Door/Window detector) to Z-Wave Network\n\n1.Remove the sensor cover. \n\n2.Make sure the sensor is powered. \n\n3.Set Z-Wave controller or Z-Wave gateway into inclusion mode (Refer to the controller or gateway operating manual) \n4.Press the button three times within 1.5 second, the device will enter inclusion mode. And the LED will flash on and off alternately five times.",
            name: "InclusionDescription",
          },
          {
            text:
              "Delete the Sensor (Door/Window detector) from Z-Wave Network\n\n1.Remove the device cover. \n\n2.Make sure the sensor is powered. \n\n3.Set Z-Wave controller or Z-Wave gateway into exclusion mode (Refer to the controller or gateway operating manual) \n4.Press the button three times within 1.5 second, the device will enter exclusion mode.",
            name: "ExclusionDescription",
          },
          {
            text: "https://products.z-wavealliance.org/products/1782/",
            id: "1082",
            name: "ZWProductPage",
            type: "0003",
          },
          { text: "NAS-DS01Z", id: "1082", name: "Identifier", type: "0003" },
          {
            text: "CEPT (Europe)",
            id: "1082",
            name: "FrequencyName",
            type: "0003",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1668/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1782/xml",
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
            instance: "1",
            label: "Configuring the OFF Delay",
            max: "65536",
            min: "0",
            size: "2",
            type: "short",
            units: "second",
            value: "0",
            Help:
              "This configuration parameter that can be used to adjust the amount of delay before the OFF command is transmitted. This parameter can be configured with the value of 0 through 65535, where 0 means send OFF command immediately and 65535 means 65535 seconds of delay.",
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Basic Set Level",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "255",
            Help:
              "Basic Set Command will be sent where contains a value when the door/window is opened or closed, the receiver will take it for consideration; for instance, if a lamp module is received the Basic Set Command of which value is decisive as to how bright of dim level of lamp module shall be.\n      ",
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
              { index: "2", label: "Control Commands", max_associations: "5" },
              {
                index: "3",
                label: "Send Notification Report",
                max_associations: "5",
              },
              {
                index: "4",
                label: "Send Binary Sensor Report",
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
