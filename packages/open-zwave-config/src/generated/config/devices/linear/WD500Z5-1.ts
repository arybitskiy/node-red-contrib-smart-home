import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/014F:3530:5744",
            name: "OzwInfoPage",
          },
          { text: "images/linear/WD500Z5-1.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1883/",
            id: "3530",
            name: "ZWProductPage",
            type: "5744",
          },
          {
            text:
              "Adding to a Network:\n1. With your Controller in Discovery or Add Mode, tap the switch. The LED will blink slowly when in ADD Mode.\n2. You should see an indication on your Controller that the “device was added” to the network and the LED will stop blinking.\n3. The device will appear in the list of Switches. It should display as a switch.",
            name: "InclusionDescription",
          },
          { text: "WD500Z5-1", id: "3530", name: "Identifier", type: "5744" },
          {
            text:
              "To Reset Unit (If Required):\nUse only in the event that your primary Controller is lost or otherwise inoperable, to reset the GoControl Dimmer and clear all network information, follow these steps:\n1. Tap the top of the switch five (5) times.\n2. Press and hold the bottom of the switch for 15 seconds. The LED will increasingly blink faster to indicate that a Reset is taking place.",
            name: "ResetDescription",
          },
          {
            text:
              "The WD500Z5-1 is an in-wall lighting dimmer switch designed to operate with LED, halogen and incandescent lights.  Not only can this switch control the connected load, with Central Scene support it can run up to 6 scenes created by the Hub it is the most versatile Home Automation light switch available. With OTA upgrading supported, this light switch may be the last one ever installed in a home.",
            name: "Description",
          },
          { text: "WD500Z5-1", name: "Name" },
          {
            text:
              "Removing from a Network:\n1. Set the Controller into Removal Mode and follow its instruction to delete the GoControl Dimmer from the Controller.\n2. Remove the switch by tapping the paddle 2 times. The LED will begin blinking slowly for 10 seconds indicating that it has been removed.\n3. You should see an indication on your Controller that the “device was removed” from the network.",
            name: "ExclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1883/10008092X18 WD500Z5-1_WD1000Z5-1 Instructions.pdf",
            name: "ProductManual",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "3530",
            name: "FrequencyName",
            type: "5744",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1883/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
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
            index: "3",
            label: "Night Light",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "By default, the Dimmer LED will turn OFF when the load attached is turned ON.",
            Item: [
              { label: "Night-light Mode", value: "0" },
              { label: "LED ON when load is on", value: "1" },
              { label: "LED always ON", value: "2" },
              { label: "LED always OFF", value: "3" },
              { label: "LED blink during RF transmission", value: "4" },
            ],
          },
          {
            genre: "config",
            index: "4",
            label: "Invert Switch",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Change the top of the switch to OFF and the bottom of the switch to ON.",
            Item: [
              { label: "Normal", value: "0" },
              { label: "Invert", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "5",
            label: "Ignore Start-Level",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "This dimmer will always start dimming from its current level, ignoring any commanded start level.",
            Item: [
              { label: "No", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "7",
            label: "Dim Remote On/Off Step",
            max: "99",
            min: "1",
            size: "1",
            type: "byte",
            units: "steps",
            value: "3",
            Help:
              "Dim Step can be set to a value of 1 to 99. This value indicates how many levels the dimmer will change each time the Dim Timer expires.",
          },
          {
            genre: "config",
            index: "8",
            label: "Dim Remote On/Off Timer",
            max: "255",
            min: "1",
            size: "1",
            type: "byte",
            units: "ms",
            value: "10",
            Help:
              "The Dim Timer (how fast the dim steps happen). It can be set to a value of 1 to 255. This value indicates in 10 millisecond resolution, how often the dim level will change.",
          },
          {
            genre: "config",
            index: "9",
            label: "Dim Local On/Off Step",
            max: "99",
            min: "1",
            size: "1",
            type: "byte",
            units: "steps",
            value: "10",
            Help:
              "Dim Step can be set to a value of 1 to 99. This value indicates how many levels the dimmer will change each time the Dim Timer expires.",
          },
          {
            genre: "config",
            index: "10",
            label: "Dim Local On/Off Timer",
            max: "255",
            min: "1",
            size: "1",
            type: "byte",
            units: "ms",
            value: "10",
            Help:
              "The Dim Timer (how fast the dim steps happen). It can be set to a value of 1 to 255. This value indicates in 10 millisecond resolution, how often the dim level will change.",
          },
          {
            genre: "config",
            index: "11",
            label: "Dim ALL On/Off Step",
            max: "99",
            min: "1",
            size: "1",
            type: "byte",
            units: "steps",
            value: "10",
            Help:
              "Dim Step can be set to a value of 1 to 99. This value indicates how many levels the dimmer will change each time the Dim Timer expires.",
          },
          {
            genre: "config",
            index: "12",
            label: "Dim ALL On/Off Timer",
            max: "255",
            min: "1",
            size: "1",
            type: "byte",
            units: "ms",
            value: "10",
            Help:
              "The Dim Timer (how fast the dim steps happen). It can be set to a value of 1 to 255. This value indicates in 10 millisecond resolution, how often the dim level will change.",
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
