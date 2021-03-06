import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0165:0001:0002",
            name: "OzwInfoPage",
          },
          { text: "images/nodon/crc3100OctanRemote.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1923/",
            id: "0001",
            name: "ZWProductPage",
            type: "0002",
          },
          {
            text:
              'Simultaneously push on buttons 3 and 4, during 1 second. The LED will blink red and green to validate the factory reset.\n\nA factory reset will completely delete the memory of the remote control and restore all parameters to default value.\nIn "Standalone" Mode, make sure to remove all the devices added or associated in the remote control\'s network before performing a factory reset. \nIn "Gateway" Mode, use the factory reset procedure only when the primary controller (i.e the Gateway) is missing or defective. Reset the remote control does not mean that it has been removed from the primary controller memory. Remove the remote control (through the primary controller) before performing a factory reset.',
            name: "ResetDescription",
          },
          {
            text: "CEPT (Europe) / U.S. / Canada / Mexico",
            id: "0001",
            name: "FrequencyName",
            type: "0002",
          },
          { text: "OCTAN Remote", name: "Name" },
          { text: "CRC-3-1-0X", id: "0001", name: "Identifier", type: "0002" },
          {
            text:
              "The OCTAN Remote NodOn® controls any compatible receivers Z-Wave® or Z-Wave Plus®, such as the Smart Plug NodOn®. It can address, directly, up to 4 groups of 8 devices and sent up to 16 different scenes to a Home Automation Gateway. This controller can operate on its own (“Standalone” Mode) or as gateway’s assistant (“Gateway” Mode). The product integrates a LED, which give an intuitive feedback for each operation you perform.\n\nBased on an innovative technology, the OCTAN Remote NodOn® is only powered with a CR2032 battery, offering 2 years’ autonomy.\n\nA magnetic wall support is included with your OCTAN Remote NodOn®, which allow you to easily install and move it. This support can be screwed or fixed by adhesive bonding. The remote control embeds a small magnet, allowing fixing it on its wall support or on any metallic surface (fridge door, heater, etc.).\n\nThe OCTAN Remote NodOn® is based on brand new 500 series Z-Wave® module from Sigma Designs®, and supports all the new features of Z-Wave Plus® standard: \nLonger range (up to 40 meters indoor), lower power consumption, higher data rate transmission, and many more new features.",
            name: "Description",
          },
          {
            text:
              'When the product in "Gateway" mode, any action on button will send a wake up notification to the gateway.',
            name: "WakeupDescription",
          },
          {
            text:
              '1- Push 3 times (quickly) on the button 4. The LED blinks in blue.\n\n2- Place the device you want to remove in "Learning" Mode, within 10 seconds. To do so, please refer to your device\'s user guide.\n\n3- The LED blinks in green to confirm the exclusion.',
            name: "ExclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1923/NodOn-CRC-3-1-xx-UserGuide-150528-EN-online.pdf",
            name: "ProductManual",
          },
          {
            text:
              '1- Push 3 times (quickly) on the button 1. The LED blinks in blue.\n\n2- Place the device you want to add in "Learning" Mode, within 10 seconds. To do so, please refer to your device\'s user guide.\n\n3- The LED blinks in green to confirm the inclusion.',
            name: "InclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1326/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1923/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
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
            genre: "config",
            index: "1",
            label: "Profile Buttons 1 & 3",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              'This parameter configures the behavior of the buttons 1 and 3 when the product is in "Gateway Centric Mode"',
            Item: [
              { label: "Scene Mode", value: "0" },
              { label: "Mono Mode", value: "1" },
              { label: "Duo Mode", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "2",
            label: "Profile Buttons 2 & 4",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              'This parameter configures the behavior of the buttons 2 and 4 when the product is in "Gateway Centric Mode"',
            Item: [
              { label: "Scene Mode", value: "0" },
              { label: "Mono Mode", value: "1" },
              { label: "Duo Mode", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "3",
            label: "Scene Type",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              'This parameter configures the type of command sent when the product is in "Gateway Centric Mode", with buttons profile configuration set in "Scene Behavior".',
            Item: [
              { label: "Central Scene", value: "0" },
              { label: "Scene Activation", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "4",
            label: "Action Button 1 Mono",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "When button are set in Mono Button mode they can have 3 different behaviors :\n        1: They can directly control other nodes with Basic and multi-level command class\n        2: Send Switch All On command\n        3: Send Switch All Off command\n         ",
            Item: [
              { label: "Control Group 2", value: "0" },
              { label: "All Switch ON", value: "1" },
              { label: "All Switch OFF", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "5",
            label: "Action Button 2 Mono",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "When button are set in Mono Button mode they can have 3 different behaviors :\n        1: They can directly control other nodes with Basic and multi-level command class\n        2: Send Switch All On command\n        3: Send Switch All Off command\n         ",
            Item: [
              { label: "Control Group 3", value: "0" },
              { label: "All Switch ON", value: "1" },
              { label: "All Switch OFF", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "6",
            label: "Action Button 3 Mono",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "When button are set in Mono Button mode they can have 3 different behaviors :\n        1: They can directly control other nodes with Basic and multi-level command class\n        2: Send Switch All On command\n        3: Send Switch All Off command\n         ",
            Item: [
              { label: "Control Group 4", value: "0" },
              { label: "All Switch ON", value: "1" },
              { label: "All Switch OFF", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "7",
            label: "Action Button 4 Mono",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "When button are set in Mono Button mode they can have 3 different behaviors :\n        1: They can directly control other nodes with Basic and multi-level command class\n        2: Send Switch All On command\n        3: Send Switch All Off command\n         ",
            Item: [
              { label: "Control Group 5", value: "0" },
              { label: "All Switch ON", value: "1" },
              { label: "All Switch OFF", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "8",
            label: "Led Management",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Item: [
              { label: "Led OFF", value: "0" },
              { label: "Led Blink on button action", value: "1" },
              { label: "Led Blink on transmission result", value: "2" },
              {
                label: "Led Blink on button action and transmission result",
                value: "3",
              },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "7",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              {
                index: "2",
                label: "Button 1 - Mono - Controlled nodes",
                max_associations: "8",
              },
              {
                index: "3",
                label: "Button 2 - Mono - Controlled nodes",
                max_associations: "8",
              },
              {
                index: "4",
                label: "Button 3 - Mono - Controlled nodes",
                max_associations: "8",
              },
              {
                index: "5",
                label: "Button 4 - Mono - Controlled nodes",
                max_associations: "8",
              },
              {
                index: "6",
                label: "Button 1 & 3 - Duo - Controlled nodes",
                max_associations: "8",
              },
              {
                index: "7",
                label: "Button 2 & 4 - Duo - Controlled nodes",
                max_associations: "8",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
