import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/027a:1e1c:b111",
            name: "OzwInfoPage",
          },
          { text: "images/zooz/zen21v3.png", name: "ProductPic" },
          {
            text:
              "https://products.z-wavealliance.org/products/3667?selectedFrequencyId=2",
            id: "1e1c",
            name: "ZWProductPage",
            type: "b111",
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
            id: "1e1c",
            name: "FrequencyName",
            type: "b111",
          },
          { text: "ZEN21", id: "1e1c", name: "Identifier", type: "b111" },
          {
            text:
              "https://products.z-wavealliance.org/ProductManual/File?folder=&filename=product_documents/3667/zooz-z-wave-plus-on-off-switch-zen21-ver3.1-manual.pdf",
            name: "ProductManual",
          },
          { text: "Z-WAVE PLUS ON / OFF LIGHT SWITCH", name: "Name" },
          {
            text:
              "FEATURES:\n- Manual and remote on/off control for lights and small appliances\n- Unique Direct 3-Way Solution: no add-on switch needed, extra savings! (Neutral wire required, use in 4-Way only if direct connection to load and line are in the same box)\n- Scene control on selected hubs\n- Reports on/off status to your controller instantly\n- NEW VERSION: more advanced settings (timer, turn switch on/off with any paddle, choose state after power failure), improved manual and packaging\n- White (no other color available)\n- Restores on/off status after power failure\n- Can be associated with other Z-Wave devices by scheduling scenes and customizing events\n- Compatible with LED, CFL, and incandescent bulbs\n- Screw terminal installation - requires Line (Hot), Load, Neutral, and Ground wires\n- New and improved Z-Wave Plus 500 series chip for faster, stronger wireless connectivity\n- Built-in repeater that strengthens your Z-Wave network\n- Blue LED indicator to easily locate the switch in the dark and signal Z-Wave communication\n- Use a standard-size wall plate for single gang installations (wall plate not included)\n- UL-listed and Z-Wave Plus certified\n\nSPECIFICATIONS:\n- Model Number: ZEN21\n\n- Z-Wave Frequency: 908.42 MHz (US)\n- Power: 120 VAC, 60 Hz\n- Maximum Loads: 960W Incandescent, 150W LED and CFL bulbs, 1800W (15A) Resistive\n- Z-Wave Range: Up to 100 feet line of sight between the Wireless Controller and the closest Z-Wave receiver module\n- Operating Temperature: 32-104° F (0-40° C)\n- Installation: Indoor use only\n\nhttps://www.support.getzooz.com/kb/article/316-zooz-on-off-switch-zen21-ver-3-04-advanced-settings/\nMANUAL CONTROL\nUpper Paddle:\n1 x tap: load on; Scene 1, attribute 00 (button 1)\n2 x tap: Scene 1, attribute 03 (button 3)\n3 x tap: enter inclusion (pairing) mode; Scene 1, attribute 04 (button 5)\n4 x tap: Scene 1, attribute 05 (button 7)\n6 x tap: change LED indicator mode (see parameter 2)\n10 x tap: change physical / Z-Wave control mode (see parameter 11)\ntap-tap-tap-and-hold: factory reset\n\nLower Paddle:\n1 x tap: load off; Scene 2, attribute 00 (button 2)\n2 x tap: Scene 2, attribute 03 (button 4)\n3 x tap: enter exclusion (unpairing) mode; Scene 2, attribute 04 (button 6)\n4 x tap: Scene 2, attribute 05 (button 8)\ntap-tap-tap-and-hold: factory reset",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text: "Updated for firmware version 3.04",
                author: "Brad Parker - https://github.com/bepsoccer",
                date: "13 April 2020",
                revision: 2,
              },
              {
                text: "Rename XML for correct hardware version",
                author: "Matthew Grimes",
                date: "12 June 2020",
                revision: 3,
              },
              {
                text: "Update parameter 12 description",
                author: "Matthew Grimes",
                date: "18 June 2020",
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
              { label: "physical tap on ZEN21 only", value: "1" },
              {
                label: "physical tap on connected 3-way switch only",
                value: "2",
              },
              {
                label: "physical tap on ZEN21 or connected 3-way switch",
                value: "3",
              },
              { label: "Z-Wave command from hub", value: "4" },
              {
                label: "physical tap on ZEN21 or Z-Wave command from hub",
                value: "5",
              },
              {
                label:
                  "physical tap on connected 3-way switch or Z-Wave command from hub",
                value: "6",
              },
              {
                label:
                  "physical tap on ZEN21 / connected 3-way switch or Z-Wave command from hub",
                value: "7",
              },
              { label: "timer only", value: "8" },
              { label: "physical tap on ZEN21 or timer", value: "9" },
              {
                label: "physical tap on connected 3-way switch or timer",
                value: "10",
              },
              {
                label:
                  "physical tap on ZEN21 / connected 3-way switch or timer",
                value: "11",
              },
              { label: "Z-Wave command from hub or timer", value: "12" },
              {
                label:
                  "physical tap on ZEN21, Z-Wave command from hub, or timer",
                value: "13",
              },
              {
                label:
                  "physical tap on ZEN21 / connected 3-way switch, Z-Wave command from hub, or timer",
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
            index: "9",
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
            index: "12",
            label: "3-Way Switch Type",
            units: "",
            min: "0",
            max: "1",
            value: "0",
            size: "1",
            Help:
              "Choose the type of 3-way switch you want to use with this switch in a 3-way set-up.",
            Item: [
              {
                label: "regular mechanical 3-way on/off switch(default)",
                value: "0",
              },
              {
                label:
                  "momentary switch, click once to change status (light on or off)",
                value: "1",
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
              { index: "1", label: "Lifeline", max_associations: "5" },
              { index: "2", label: "Group 2", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
