import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/027A:A001:A000",
            name: "OzwInfoPage",
          },
          { text: "images/zooz/zen26.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3147/",
            id: "A001",
            name: "ZWProductPage",
            type: "A000",
          },
          {
            text:
              "If your primary controller is missing or inoperable, you may need to reset the device to factory settings. To complete the reset process manually, tap-tap-tap’n’hold the upper paddle for at least 10 seconds. The LED indicator will flash to confirm successful reset.\nNOTE: All previously recorded activity and custom settings will be erased from the device’s memory.",
            name: "ResetDescription",
          },
          {
            text:
              "1. Bring your Z-Wave gateway (hub) close to the switch if possible\n2. Put the Z-Wave hub into exclusion mode (not sure how to do that?\nask@getzooz.com)\n3. Tap the lower paddle on the switch 3 times quickly",
            name: "ExclusionDescription",
          },
          {
            text:
              "1. Initiate inclusion (pairing) in the app (or web interface) of your hub.\n2. Tap the upper paddle on the switch 3 times quickly.",
            name: "InclusionDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "A001",
            name: "FrequencyName",
            type: "A000",
          },
          { text: "ZEN26", id: "A001", name: "Identifier", type: "A000" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/3147/zooz-z-wave-plus-s2-on-off-switch-zen26-manual.pdf",
            name: "ProductManual",
          },
          { text: "S2 On Off Switch", name: "Name" },
          {
            text:
              "FEATURES:\n- Manual or Z-Wave on/off control with instant status updates\n- Simple Direct 3-Way: connect with existing on/off switches in 3-way, 4-way, and 5-way set-ups, no add-on needed (neutral wire required)\n- Remembers and restores on/off status after power failure\n- LED indicator signals inclusion, exclusion, reset, and setting changes\n- Built-in Z-Wave Plus signal repeater to extend network range\n- Works with LED, CFL, and incandescent bulbs\n- S2 security protocol and the latest 500 Z-Wave chip for faster and safer wireless communication\n- Supported by most Z-Wave controllers\n\nSPECIFICATIONS:\n- Model Number: ZEN26\n- Z-Wave Signal Frequency: 908.42 MHz\n- Power: 120 VAC, 60 Hz\n- Maximum Load: 8 A, 150 W LED/CFL, 600 W incandescent, 1200 W resistive\n- Range: Up to 100 feet line of sight\n- Operating Temperature: 32-104° F (0-40° C)\n- Installation and Use: Indoor only\n\nhttps://www.support.getzooz.com/kb/article/315-zooz-s2-on-off-switch-zen26-ver-2-03-advanced-settings/\nMANUAL CONTROL\nUpper Paddle:\n1 x tap: load on; Scene 1, attribute 00 (button 1)\n2 x tap: Scene 1, attribute 03 (button 3)\n3 x tap: enter inclusion (pairing) mode; Scene 1, attribute 04 (button 5)\n4 x tap: Scene 1, attribute 05 (button 7)\n6 x tap: change LED indicator mode (see parameter 2)\n10 x tap: change physical / Z-Wave control mode (see parameter 11)\ntap-tap-tap-and-hold: factory reset\n\nLower Paddle: \n1 x tap: load off; Scene 2, attribute 00 (button 2)\n2 x tap: Scene 2, attribute 03 (button 4)\n3 x tap: enter exclusion (unpairing) mode; Scene 2, attribute 04 (button 6)\n4 x tap: Scene 2, attribute 05 (button 8)\ntap-tap-tap-and-hold: factory reset",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3147/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 2,
              },
              {
                text: "Updated for firmware version 2.0",
                author: "David Alden - dave@alden.name",
                date: "23 Oct 2019",
                revision: 3,
              },
              {
                text: "Updated for firmware version 2.03",
                author: "Brad Parker - https://github.com/bepsoccer",
                date: "13 April 2020",
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
            type: "list",
            genre: "config",
            index: "1",
            label: "Paddle Control",
            size: "1",
            min: "0",
            max: "2",
            value: "0",
            Help:
              "Normal mode: Upper paddle turns the light on, lower paddle turns the light off.  Reverse mode: Upper paddle turns the light off, lower paddle turns the light on.  Toggle mode: Either paddle toggles the light.",
            Item: [
              { label: "Normal", value: "0" },
              { label: "Reverse", value: "1" },
              { label: "Toggle", value: "2" },
            ],
          },
          {
            type: "list",
            genre: "config",
            index: "2",
            label: "LED Indication Control",
            size: "1",
            min: "0",
            max: "3",
            value: "0",
            Help:
              "LED Indication light function.  Normal has the LED Indication on when the switch is off, off when the switch is on. ",
            Item: [
              { label: "Normal", value: "0" },
              { label: "Reverse", value: "1" },
              { label: "Always Off", value: "2" },
              { label: "Always On", value: "3" },
            ],
          },
          {
            type: "list",
            genre: "config",
            index: "3",
            label: "Enable Auto Turn-Off Timer",
            size: "1",
            min: "0",
            max: "1",
            value: "0",
            Help: "",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            type: "int",
            genre: "config",
            index: "4",
            label: "Auto Turn-Off Timer Duration",
            size: "4",
            min: "1",
            max: "65535",
            value: "60",
            units: "minutes",
            Help: "Time, in minutes, for auto-off timer delay.",
          },
          {
            type: "list",
            genre: "config",
            index: "5",
            label: "Enable Auto Turn-On Timer",
            size: "1",
            min: "0",
            max: "1",
            value: "0",
            Help: "",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            type: "int",
            genre: "config",
            index: "6",
            label: "Auto Turn-On Timer Duration",
            size: "4",
            min: "1",
            max: "65535",
            value: "60",
            units: "minutes",
            Help:
              "Set the time (in minutes) after which you want the switch to automatically turn on once it has been turned off.",
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "7",
            label: "Association Reports",
            units: "",
            min: "0",
            max: "15",
            value: "15",
            size: "1",
            Help:
              "Choose which physical and Z-Wave triggers should prompt the switch to send a status change report to associated devices.",
            Item: [
              { label: "none", value: "0" },
              { label: "physical tap on ZEN26 only", value: "1" },
              {
                label: "physical tap on connected 3-way switch only",
                value: "2",
              },
              {
                label: "physical tap on ZEN26 or connected 3-way switch",
                value: "3",
              },
              { label: "Z-Wave command from hub", value: "4" },
              {
                label: "physical tap on ZEN26 or Z-Wave command from hub",
                value: "5",
              },
              {
                label:
                  "physical tap on connected 3-way switch or Z-Wave command from hub",
                value: "6",
              },
              {
                label:
                  "physical tap on ZEN26 / connected 3-way switch or Z-Wave command from hub",
                value: "7",
              },
              { label: "timer only", value: "8" },
              { label: "physical tap on ZEN26 or timer", value: "9" },
              {
                label: "physical tap on connected 3-way switch or timer",
                value: "10",
              },
              {
                label:
                  "physical tap on ZEN26 / connected 3-way switch or timer",
                value: "11",
              },
              { label: "Z-Wave command from hub or timer", value: "12" },
              {
                label:
                  "physical tap on ZEN26, Z-Wave command from hub, or timer",
                value: "13",
              },
              {
                label:
                  "physical tap on ZEN26 / connected 3-way switch, Z-Wave command from hub, or timer",
                value: "14",
              },
              { label: "all of the above. (default)", value: "15" },
            ],
          },
          {
            type: "list",
            genre: "config",
            index: "8",
            label: "On Off Status After Power Failure",
            size: "1",
            min: "0",
            max: "2",
            value: "2",
            Help:
              "Status after power failure.  Off: always turn light off.  On: always turn light on.  Restore: remember the latest state and restore that state.",
            Item: [
              { label: "Off", value: "0" },
              { label: "On", value: "1" },
              { label: "Restore", value: "2" },
            ],
          },
          {
            type: "list",
            genre: "config",
            index: "10",
            label: "Enable/Disable Scene Control",
            size: "1",
            min: "0",
            max: "1",
            value: "0",
            Help:
              "Enable or Disable scene control functionality for quick double tap triggers (Available for select hubs only).",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "11",
            label: "Smart Bulb Mode: Enable/Disable Paddle / Z-Wave Control",
            units: "",
            min: "0",
            max: "2",
            value: "1",
            size: "1",
            Help:
              "Enable or disable local on/off control. If enabled, you’ll only be able to control the connected light via Z-Wave. Scenes and other functionality will still be available through paddles.",
            Item: [
              { label: "physical paddle control disabled", value: "0" },
              {
                label: "physical paddle control enabled (default)",
                value: "1",
              },
              {
                label: "physical paddle and Z-Wave control disabled",
                value: "2",
              },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "13",
            label: "Reporting behavior with disabled physical control",
            units: "",
            min: "0",
            max: "1",
            value: "0",
            size: "1",
            Help: "Set reporting behavior for disabled physical control.",
            Item: [
              {
                label:
                  "switch reports on/off status and changes LED indicator state even if physical and Z-Wave control is disabled (default)",
                value: "0",
              },
              {
                label:
                  "switch doesn't report on/off status or change LED indicator state when physical (and Z-Wave) control is disabled",
                value: "1",
              },
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
              { index: "2", label: "Status", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
