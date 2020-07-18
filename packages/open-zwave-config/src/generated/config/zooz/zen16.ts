import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          { text: "Multirelay", name: "Name" },
          {
            text:
              "PRODUCT FEATURES:\n- Powerful dry contact relays to control loads up to 15 A and 20 A\n- Perfect for outdoor lighting, pool pumps, garage door, or gas fireplace\n- Control up to 3 connected loads independently or together\n- Z-Wave or optional wall switch control (toggle or momentary type)\n- Built-in timers for each relay to simplify automation\n- Remembers and restores on/off status after power failure\n- Powered by 12-24 V DC/AC or USB C port for easy set-up\n- Wall mounting and minimal design for clean installation\n- S2 security protocol and the latest 500 Z-Wave chip\n\nSPECIFICATIONS:\n- Model Number: ZEN16\n- Z-Wave Signal Frequency: 908.42 MHz\n- Power: 12-24 V DC/AC or USB C\n- Maximum Load: Relay 1: 15A (1/3 HP), Relay 2: 15A (1/3 HP),Relay 3: 20A (3/4 HP)",
            name: "Description",
          },
          {
            text: "http://www.openzwave.com/device-database/027a:a00a:a000",
            name: "OzwInfoPage",
          },
          { text: "http://www.getzooz.com/", name: "ProductPage" },
          {
            text: "http://www.support.getzooz.com/home/",
            name: "ProductSupport",
          },
          { text: "images/zooz/zen16.png", name: "ProductPic" },
          {
            text:
              "https://products.z-wavealliance.org/ProductManual/File?folder=&filename=product_documents/3788/zooz-s2-multirelay-zen16-ver1.0-manual-online.pdf",
            name: "ProductManual",
          },
          {
            text:
              "1. Initiate inclusion (pairing) in the app (or web interface) of your hub.  2. Finalize inclusion at the device.  Click the Z-Wave button 3 times quickly to add the MultiRelay to your network.  The LED indicator will blink to signal communication and remain on for 2 seconds to confirm inclusion.",
            name: "InclusionDescription",
          },
          {
            text:
              "1. Bring your MultiRelay close to the Z-Wave gateay (hub) and power it.\n2. Put the Z-Wave hub into exclusion mode (not sure how to do that?  ask@getzooz.com\n3. Click the Z-Wave button 3 times quickly\n4. Your hub will confirm exclusion and the device will disappear from your controller's device list",
            name: "ExclusionDescription",
          },
          {
            text:
              "If your primary controller is missing or inoperable, you may need to reset the device to factory settings. To complete the reset process manually, click the Z-Wave button 4 times quickly, the LED indicator will light up, then quickly click the Z-Wave button 4 times again.  The LED indicator will flash 3 times to confirm successful reset and will then turn off.",
            name: "ResetDescription",
          },
          {
            text: "https://products.z-wavealliance.org/products/3788",
            id: "A00A",
            name: "ZWProductPage",
            type: "A000",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "A00A",
            name: "FrequencyName",
            type: "A000",
          },
          { text: "ZEN16", id: "A00A", name: "Identifier", type: "A000" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text: "Initial Metadata Import",
                author: "David Alden - dave@alden.name",
                date: "16 Feb 2020",
                revision: 2,
              },
              {
                text: "Updated for firmware version 1.02",
                author: "Brad Parker - https://github.com/bepsoccer",
                date: "6 May 2020",
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
            type: "list",
            genre: "config",
            index: "1",
            label: "On Off Status After Power Failure",
            size: "1",
            min: "0",
            max: "4",
            value: "1",
            Help:
              "On Off Status After Power Failure.  Default: all relays restore to previous state",
            Item: [
              { label: "all relays forced off", value: "0" },
              { label: "all relays restore to previous state", value: "1" },
              { label: "all relays forced on", value: "2" },
              { label: "relays 1/2 restore, 3/4 forced off", value: "3" },
              { label: "relays 1/2 restore, 3/4 forced on", value: "4" },
            ],
          },
          {
            type: "list",
            genre: "config",
            index: "2",
            label: "Switch Type for Relay 1 (Sw1)",
            size: "1",
            min: "0",
            max: "3",
            value: "2",
            Help:
              "Switch Type for Relay 1 (Sw1).  Choose the wall switch type you want to connect to the Sw1 terminal.  Default: toggle switch (state changes whenever the switch is toggled)",
            Item: [
              { label: "momentary switch", value: "0" },
              {
                label:
                  "toggle switch (light on when switch is up/off when down)",
                value: "1",
              },
              {
                label:
                  "toggle switch (state changes whenever the switch is toggled)",
                value: "2",
              },
              {
                label: "garage door (momentary mode for Z-Wave control)",
                value: "3",
              },
            ],
          },
          {
            type: "list",
            genre: "config",
            index: "3",
            label: "Switch Type for Relay 2 (Sw2)",
            size: "1",
            min: "0",
            max: "3",
            value: "2",
            Help:
              "Switch Type for Relay 2 (Sw2).  Choose the wall switch type you want to connect to the Sw2 terminal.  Default: toggle switch (state changes whenever the switch is toggled)",
            Item: [
              { label: "momentary switch", value: "0" },
              {
                label:
                  "toggle switch (light on when switch is up/off when down)",
                value: "1",
              },
              {
                label:
                  "toggle switch (state changes whenever the switch is toggled)",
                value: "2",
              },
              {
                label: "garage door (momentary mode for Z-Wave control)",
                value: "3",
              },
            ],
          },
          {
            type: "list",
            genre: "config",
            index: "4",
            label: "Switch Type for Relay 3 (Sw3)",
            size: "1",
            min: "0",
            max: "3",
            value: "2",
            Help:
              "Switch Type for Relay 3 (Sw3).  Choose the wall switch type you want to connect to the Sw3 terminal.  Default: toggle switch (state changes whenever the switch is toggled)",
            Item: [
              { label: "momentary switch", value: "0" },
              {
                label:
                  "toggle switch (light on when switch is up/off when down)",
                value: "1",
              },
              {
                label:
                  "toggle switch (state changes whenever the switch is toggled)",
                value: "2",
              },
              {
                label: "garage door (momentary mode for Z-Wave control)",
                value: "3",
              },
            ],
          },
          {
            type: "list",
            genre: "config",
            index: "5",
            label: "LED Indicator Control",
            size: "1",
            min: "0",
            max: "3",
            value: "0",
            Help:
              "LED Indicator Control.  Choose if you want the LED indicator to turn on when any of the relays are on or if all of them are off, or if you want it to remain on or off at all times.  Default: On when all relays are off",
            Item: [
              { label: "On when all relays are off", value: "0" },
              { label: "On when any relays are on", value: "1" },
              { label: "Always Off", value: "2" },
              { label: "Always On", value: "3" },
            ],
          },
          {
            type: "int",
            genre: "config",
            index: "6",
            label: "Auto Turn-Off Timer for Relay 1",
            size: "4",
            min: "0",
            max: "65535",
            value: "0",
            units: "minutes",
            Help:
              "Auto Turn-Off Timer for Relay 1.  Sets the time (in minutes) after which you want relay 1 to automatically turn off once it has been turned on.  Range: 1-65535.  Default: 0 (disabled)",
          },
          {
            type: "int",
            genre: "config",
            index: "7",
            label: "Auto Turn-On Timer for Relay 1",
            size: "4",
            min: "0",
            max: "65535",
            value: "0",
            units: "minutes",
            Help:
              "Auto Turn-On Timer for Relay 1.  Sets the time (in minutes) after which you want relay 1 to automatically turn on once it has been turned off.  Range: 1-65535.  Default: 0 (disabled)",
          },
          {
            type: "int",
            genre: "config",
            index: "8",
            label: "Auto Turn-Off Timer for Relay 2",
            size: "4",
            min: "0",
            max: "65535",
            value: "0",
            units: "minutes",
            Help:
              "Auto Turn-Off Timer for Relay 2.  Sets the time (in minutes) after which you want relay 2 to automatically turn off once it has been turned on.  Range: 1-65535.  Default: 0 (disabled)",
          },
          {
            type: "int",
            genre: "config",
            index: "9",
            label: "Auto Turn-On Timer for Relay 2",
            size: "4",
            min: "0",
            max: "65535",
            value: "0",
            units: "minutes",
            Help:
              "Auto Turn-On Timer for Relay 2.  Sets the time (in minutes) after which you want relay 2 to automatically turn on once it has been turned off.  Range: 1-65535.  Default: 0 (disabled)",
          },
          {
            type: "int",
            genre: "config",
            index: "10",
            label: "Auto Turn-Off Timer for Relay 3",
            size: "4",
            min: "0",
            max: "65535",
            value: "0",
            units: "minutes",
            Help:
              "Auto Turn-Off Timer for Relay 3.  Sets the time (in minutes) after which you want relay 3 to automatically turn off once it has been turned on.  Range: 1-65535.  Default: 0 (disabled)",
          },
          {
            type: "int",
            genre: "config",
            index: "11",
            label: "Auto Turn-On Timer for Relay 3",
            size: "4",
            min: "0",
            max: "65535",
            value: "0",
            units: "minutes",
            Help:
              "Auto Turn-On Timer for Relay 3.  Sets the time (in minutes) after which you want relay 3 to automatically turn on once it has been turned off.  Range: 1-65535.  Default: 0 (disabled)",
          },
          {
            type: "list",
            genre: "config",
            index: "12",
            label: "Enable/Disable Manual Control for SW1",
            size: "1",
            min: "0",
            max: "2",
            value: "1",
            Help: "Enable/Disable Manual Control for SW1.  Default: enabled",
            Item: [
              { label: "disabled", value: "0" },
              { label: "enabled", value: "1" },
              {
                label: "local control disabled with enable on/off reports",
                value: "2",
              },
            ],
          },
          {
            type: "list",
            genre: "config",
            index: "13",
            label: "Enable/Disable Manual Control for SW2",
            size: "1",
            min: "0",
            max: "2",
            value: "1",
            Help: "Enable/Disable Manual Control for SW2.  Default: enabled",
            Item: [
              { label: "disabled", value: "0" },
              { label: "enabled", value: "1" },
              {
                label: "local control disabled with enable on/off reports",
                value: "2",
              },
            ],
          },
          {
            type: "list",
            genre: "config",
            index: "14",
            label: "Enable/Disable Manual Control for SW3",
            size: "1",
            min: "0",
            max: "2",
            value: "1",
            Help: "Enable/Disable Manual Control for SW3.  Default: enabled",
            Item: [
              { label: "disabled", value: "0" },
              { label: "enabled", value: "1" },
              {
                label: "local control disabled with enable on/off reports",
                value: "2",
              },
            ],
          },
          {
            type: "list",
            genre: "config",
            index: "15",
            label: "Auto Turn-Off Timer Unit for Relay 1",
            size: "1",
            min: "0",
            max: "2",
            value: "0",
            Help:
              "Choose between second, minutes, and hours as the unit for Auto Turn-Off time for Relay 1.  Default: minutes",
            Item: [
              { label: "minutes", value: "0" },
              { label: "seconds", value: "1" },
              { label: "hours", value: "2" },
            ],
          },
          {
            type: "list",
            genre: "config",
            index: "16",
            label: "Auto Turn-On Timer Unit for Relay 1",
            size: "1",
            min: "0",
            max: "2",
            value: "0",
            Help:
              "Choose between second, minutes, and hours as the unit for Auto Turn-On time for Relay 1.  Default: minutes",
            Item: [
              { label: "minutes", value: "0" },
              { label: "seconds", value: "1" },
              { label: "hours", value: "2" },
            ],
          },
          {
            type: "list",
            genre: "config",
            index: "17",
            label: "Auto Turn-Off Timer Unit for Relay 2",
            size: "1",
            min: "0",
            max: "2",
            value: "0",
            Help:
              "Choose between second, minutes, and hours as the unit for Auto Turn-Off time for Relay 2.  Default: minutes",
            Item: [
              { label: "minutes", value: "0" },
              { label: "seconds", value: "1" },
              { label: "hours", value: "2" },
            ],
          },
          {
            type: "list",
            genre: "config",
            index: "18",
            label: "Auto Turn-On Timer Unit for Relay 2",
            size: "1",
            min: "0",
            max: "2",
            value: "0",
            Help:
              "Choose between second, minutes, and hours as the unit for Auto Turn-On time for Relay 2.  Default: minutes",
            Item: [
              { label: "minutes", value: "0" },
              { label: "seconds", value: "1" },
              { label: "hours", value: "2" },
            ],
          },
          {
            type: "list",
            genre: "config",
            index: "19",
            label: "Auto Turn-Off Timer Unit for Relay 3",
            size: "1",
            min: "0",
            max: "2",
            value: "0",
            Help:
              "Choose between second, minutes, and hours as the unit for Auto Turn-Off time for Relay 3.  Default: minutes",
            Item: [
              { label: "minutes", value: "0" },
              { label: "seconds", value: "1" },
              { label: "hours", value: "2" },
            ],
          },
          {
            type: "list",
            genre: "config",
            index: "20",
            label: "Auto Turn-On Timer Unit for Relay 3",
            size: "1",
            min: "0",
            max: "2",
            value: "0",
            Help:
              "Choose between second, minutes, and hours as the unit for Auto Turn-On time for Relay 3.  Default: minutes",
            Item: [
              { label: "minutes", value: "0" },
              { label: "seconds", value: "1" },
              { label: "hours", value: "2" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "4",
            Group: [
              { index: "1", max_associations: "1", label: "Lifeline" },
              { index: "2", max_associations: "5", label: "Relay 1 Status" },
              { index: "3", max_associations: "5", label: "Relay 2 Status" },
              { index: "4", max_associations: "5", label: "Relay 3 Status" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
