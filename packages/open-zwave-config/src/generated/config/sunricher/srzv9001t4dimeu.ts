import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0330:a10d:0003",
            name: "OzwInfoPage",
          },
          { text: "images/sunricher/srzv9001t4dimeu.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2704/",
            id: "A10D",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2704/Z-Wave Wall Controller SR-ZV9001T4-DIM-EU User Manual.pdf",
            name: "ProductManual",
          },
          {
            text:
              "The Wall controller is a Security Enabled Z-Wave Plus device that can both control other Z-Wave devices and activate scenes in Gateways. The wall controller can be included and operated in any Z-Wave network with other Z-Wave certified devices from other manufacturers and/or other applications. All non‐battery operated nodes within the network will act as repeaters regardless of vendor to increase reliability of the network.",
            name: "Description",
          },
          { text: "Wall Controller", name: "Name" },
          {
            text: "CEPT (Europe)",
            id: "A10D",
            name: "FrequencyName",
            type: "0003",
          },
          {
            text: "SR-ZV9001T4-DIM-EU",
            id: "A10D",
            name: "Identifier",
            type: "0003",
          },
          {
            text:
              "There are two exclusion methods:\nMethod 1: Exclusion from the primary controller/gateway as follows:\n1. Set the primary controller/gateway into exclusion mode (Please refer to your primary\ncontrollers manual on how to set your controller into exclusion).\n2. Short press the “inclusion/exclusion” button, or press and hold down “ALL ON/OFF”\nbutton for over 3 seconds, the wall controller will be set to exclusion mode, and waiting\nto be excluded, then LED indicator turns on and shows 3 short blinks and 1 long blink to\nindicate successful exclusion.\nOnce the wall controller quits “exclusion mode”, the LED indicator will turns off. There\nare 3 methods for the wall controller to quit “exclusion mode”:\n1. Automatically quits after successful exclusion.\n2. Quits after 25 seconds timeout.\n3. Press and hold down “ALL ON/OFF” button for over 3 seconds, or short press the\n“inclusion/exclusion” button to quit.\nMethod 2: Factory reset the wall controller will force the wall controller to be excluded\nfrom a network. (please refer to the part “Factory Reset” of this manual)",
            name: "ExclusionDescription",
          },
          {
            text:
              "Press and hold down “inclusion/exclusion” button for over 8 seconds, LED indicator turns on and shows 3 short blinks and 1 long blink to indicate successful factory reset, release “inclusion/exclusion” button, the wall controller will restart automatically.\n\nIf this controller is the primary controller for your network, resetting it will result in the nodes in your network being orphaned and it will be necessary after the reset to exclude and re-include all of the nodes in the network.  If this controller is being used as a secondary controller in the network, use this procedure to reset this controller only in the event that the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "1. Set primary controller/gateway into inclusion mode (Please refer to your primary\ncontrollers manual on how to turn your controller into inclusion).\n2. Make sure the wall controller does not belong to any Z-Wave network (please refer to\nthe part “How to check whether the wall controller included to a network” of this manual).\n3. Short press the “inclusion/exclusion” button, or press and hold down “ALL ON/OFF”\nbutton for over 3 seconds, the wall controller will be set to inclusion mode, and waiting to\nbe included, then LED indicator turns on and blinks 6 times quickly to indicate\nsuccessful inclusion.\nOnce the wall controller quits “inclusion mode”, the LED indicator will turns off. There\nare 3 methods for the wall controller to quit “inclusion mode”:\n1. Automatically quits after successful inclusion.\n2. Quits after 25 seconds timeout.\n3. Press and hold down “ALL ON/OFF” button for over 3 seconds, or short press the\n“inclusion/exclusion” button to quit.",
            name: "InclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2704/xml",
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
        id: "133",
        Associations: [
          {
            num_groups: "5",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              { index: "2", label: "Button 1", max_associations: "12" },
              { index: "3", label: "Button 2", max_associations: "12" },
              { index: "4", label: "Button 3", max_associations: "12" },
              { index: "5", label: "Button 4", max_associations: "12" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
