import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          { text: "Smart 3-Way Switch/Dimmer", name: "Name" },
          {
            text:
              "The WT00Z5-1 Wall Mount Accessory Dimmer Switch allows remote ON/OFF control and dimming of lights controlled by associated Z-Wave modules, creating virtual 3-way switches. The WT00Z5-1 controls no load directly, so it can be wired anywhere power is available, without the need for a traveler wire.",
            name: "Description",
          },
          {
            text: "http://www.openzwave.com/device-database/014f:3530:5754",
            name: "OzwInfoPage",
          },
          {
            text: "https://www.gocontrol.com/detail.php?productId=1782",
            name: "ProductPage",
          },
          {
            text: "https://www.gocontrol.com/support.php",
            name: "ProductSupport",
          },
          { text: "images/linear/WT00Z5-1.png", name: "ProductPic" },
          {
            text:
              "https://products.z-wavealliance.org/ProductManual/File?folder=&filename=MarketCertificationFiles/1888/10007350B%20.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Refer to your Controller operating instructions to add this switch under the command of the Wireless Controller.\n1. With your Controller in Discovery or Add Mode, tap the switch. The LED will blink slowly when in ADD Mode.\n2. You should see an indication on your Controller that the “device was added” to the network and the LED will stop blinking.\n3. The device will appear in the list of Switches. It should display as a switch.\nIf the Controller/Gateway shows the addition failed, repeat Steps 1-3.\nNOTE: If you have trouble adding the WT00Z5-1 to a group it may be that the Home ID and Node ID were not cleared from it after testing. You must first “RESET UNIT” to remove it from the network. Although adding it to a group includes it in the network, removing it from a group does not remove it from the network. If removed from a group, it functions as a repeater (only). “RESET UNIT” removes it completely from the network.",
            name: "InclusionDescription",
          },
          {
            text:
              "The WT00Z5-1 can be removed from the network by the Controller/Gateway. Refer to the Controller operating instructions for details.\n1. Set the Controller into Removal Mode and follow its instruction to delete the WT00Z5-1 from the Controller.\n2. Remove the switch by tapping the paddle 2 times. The LED will begin blinking slowly for 10 seconds indicating that it has been removed.\n3. You should see an indication on your Controller that the “device was removed” from the network.",
            name: "ExclusionDescription",
          },
          {
            text:
              "In the event that your primary Controller is lost or otherwise inoperable, to reset the WT00Z5-1 and clear all network information, follow these steps:\n1. Tap the top of the switch five (5) times.\n2. Press and hold the bottom of the switch for 15 seconds. The LED will increasingly blink faster to indicate that a Reset is taking place.",
            name: "ResetDescription",
          },
          {
            text: "https://products.z-wavealliance.org/products/1888",
            id: "3530",
            name: "ZWProductPage",
            type: "5754",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "3530",
            name: "FrequencyName",
            type: "5754",
          },
          { text: "WT00Z5-1", id: "3530", name: "Identifier", type: "5754" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial entry with data obtained from https://products.z-wavealliance.org/products/1888",
                author: "Nathan Spencer - natekspencer@gmail.com",
                date: "06 July 2020",
                revision: 1,
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
            type: "list",
            index: "3",
            genre: "config",
            label: "Night Light",
            units: "",
            min: "0",
            max: "4",
            value: "0",
            size: "1",
            Help:
              "\n        By default, the LED on the WT00Z5-1 will turn OFF when the Associated device is turned ON.\n      ",
            Item: [
              { label: "LED OFF when the load is on", value: "0" },
              { label: "LED ON when the load is on", value: "1" },
              { label: "LED is always ON", value: "2" },
              { label: "LED is always OFF", value: "3" },
              { label: "LED blinks during RF transmissions", value: "4" },
            ],
          },
          {
            type: "list",
            index: "4",
            genre: "config",
            label: "Invert Switch",
            units: "",
            min: "0",
            max: "1",
            value: "0",
            size: "1",
            Help:
              "\n        Change the top of the switch to OFF and the bottom of the switch to ON.\n      ",
            Item: [
              { label: "False", value: "0" },
              { label: "True", value: "1" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "3",
            Group: [
              { index: "1", max_associations: "1", label: "Lifeline" },
              { index: "2", max_associations: "5", label: "BASIC On/Off" },
              { index: "3", max_associations: "5", label: "Multilevel Switch" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
