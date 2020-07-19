import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          { text: "RGBW Dimmer", name: "Name" },
          {
            text:
              "FEATURES:\n- Manual or Z-Wave on/off, brightness, and RGBW color control\n- Perfect for programming your existing RGBW LED strip\n- Energy monitoring in live mode and over time\n- Double tap to full brightness feature + optional scene control\n- Remembers and restores on/off status after power failure\n- Built-in Z-Wave Plus signal repeater to extend network range\n- S2 security protocol and AES-128 bank-grade encryption\n\nSPECIFICATIONS:\n- Model Number: ZEN31\n- Z-Wave Signal Frequency: 908.42 MHz\n- Power: 12 / 24 V DC (Do NOT connect to 120 V AC high-voltage power!)\n- Maximum Load: 10 A total between all channels (6 A per channel max); 120 W total when powered by 12 V DC / 240 W total when powered by 24 V DC\n- Range: Up to 100 feet line of sight\n- Operating Temperature: 32-104° F (0-40° C)\n- Installation and Use: Indoor only\n- Dimensions: 1.67” x 1.5” x 0.69”",
            name: "Description",
          },
          {
            text: "http://www.openzwave.com/device-database/027a:2000:0902",
            name: "OzwInfoPage",
          },
          { text: "http://www.getzooz.com/", name: "ProductPage" },
          {
            text: "http://www.support.getzooz.com/kb/section/135",
            name: "ProductSupport",
          },
          { text: "images/zooz/zen31.png", name: "ProductPic" },
          {
            text:
              "https://products.z-wavealliance.org/ProductManual/File?folder=&filename=product_documents/3720/zooz-s2-rgbw-dimmer-zen31-manual-online.pdf",
            name: "ProductManual",
          },
          {
            text:
              "1. Initiate inclusion (pairing) in the app (or web interface) of your hub.  If you're using an S2 hub, it may ask you to enter the DSK key printed on the back cover sticker or scan the QR code next to it to complete secure inclusion.\n2. Activate the dimmer.  Make sure the RGBW Dimmer is powered up.  Click the Z-Wave button 3 times quickly to include the device.  The LED will blink yellow to indicate communication with the hub.  It will blink green (for non-secure, S0, or S2 unauthenticated inclusion) or magenta (for S2 authenticated) once the device is successfully included to your network.  It will blink red if inclusion is not successful.",
            name: "InclusionDescription",
          },
          {
            text:
              "1. Bring your Z-Wave gateway (hub) close to the RGBW dimmer if possible.\n2. Put the Z-Wave hub into exclusion mode (not sure how to do that?  ask@getzooz.com)\n3. Click the Z-Wave button on the device 3 times quickly\n4. Your hub will confirm exclusion, the LED indicator on the RGBW Dimmer will light up in red, and the device will disappear from your controller's device list.",
            name: "ExclusionDescription",
          },
          {
            text:
              "If your primary controller is missing or inoperable, you may need to reset the device to factory settings. To complete the reset process manually, press and hold the Z-Wave button to enter reset mode.  Release the button when the LED indicator glows yellow.  Then quickly click the Z-Wave button again to confirm factory reset.  Wait a few seconds until the device resets and restarts - the LED indicator will light up in red when it's ready.",
            name: "ResetDescription",
          },
          {
            text: "https://products.z-wavealliance.org/products/3720",
            id: "2000",
            name: "ZWProductPage",
            type: "0902",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "2000",
            name: "FrequencyName",
            type: "0902",
          },
          { text: "ZEN-31", id: "2000", name: "Identifier", type: "0902" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text: "Initial Metadata Import",
                author: "David Alden - dave@alden.name",
                date: "26 Jan 2020",
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
            type: "list",
            genre: "config",
            index: "1",
            label: "On Off Status After Power Failure",
            size: "1",
            min: "0",
            max: "2",
            value: "0",
            Help: "On Off Status After Power Failure.  Default: forced to OFF",
            Item: [
              { label: "forced to OFF", value: "0" },
              { label: "restore to previous state", value: "1" },
              { label: "forced to on", value: "2" },
            ],
          },
          {
            type: "list",
            genre: "config",
            index: "20",
            label: "Switch / Input Type for IN1",
            size: "1",
            min: "0",
            max: "4",
            value: "2",
            Help:
              "Switch / Input Type for IN1.  Choose the input/switch type you want to connect to the IN1 terminal.  Default: momentary switch",
            Item: [
              { label: "analog sensor w/no pullup", value: "0" },
              { label: "analog sensor with pull-up", value: "1" },
              { label: "momentary switch", value: "2" },
              { label: "toggle switch (on when swithc is on)", value: "3" },
              {
                label: "toggle switch (toggles with switch toggle)",
                value: "4",
              },
            ],
          },
          {
            type: "list",
            genre: "config",
            index: "21",
            label: "Switch / Input Type for IN2",
            size: "1",
            min: "0",
            max: "4",
            value: "2",
            Help:
              "Switch / Input Type for IN2.  Choose the input/switch type you want to connect to the IN2 terminal.  Default: momentary switch",
            Item: [
              { label: "analog sensor w/no pullup", value: "0" },
              { label: "analog sensor with pull-up", value: "1" },
              { label: "momentary switch", value: "2" },
              { label: "toggle switch (on when swithc is on)", value: "3" },
              {
                label: "toggle switch (toggles with switch toggle)",
                value: "4",
              },
            ],
          },
          {
            type: "list",
            genre: "config",
            index: "22",
            label: "Switch / Input Type for IN3",
            size: "1",
            min: "0",
            max: "4",
            value: "2",
            Help:
              "Switch / Input Type for IN3.  Choose the input/switch type you want to connect to the IN3 terminal.  Default: momentary switch",
            Item: [
              { label: "analog sensor w/no pullup", value: "0" },
              { label: "analog sensor with pull-up", value: "1" },
              { label: "momentary switch", value: "2" },
              { label: "toggle switch (on when swithc is on)", value: "3" },
              {
                label: "toggle switch (toggles with switch toggle)",
                value: "4",
              },
            ],
          },
          {
            type: "list",
            genre: "config",
            index: "23",
            label: "Switch / Input Type for IN4",
            size: "1",
            min: "0",
            max: "4",
            value: "2",
            Help:
              "Switch / Input Type for IN4.  Choose the input/switch type you want to connect to the IN4 terminal.  Default: momentary switch",
            Item: [
              { label: "analog sensor w/no pullup", value: "0" },
              { label: "analog sensor with pull-up", value: "1" },
              { label: "momentary switch", value: "2" },
              { label: "toggle switch (on when swithc is on)", value: "3" },
              {
                label: "toggle switch (toggles with switch toggle)",
                value: "4",
              },
            ],
          },
          {
            type: "bitset",
            genre: "config",
            index: "40",
            label: "Scene Control for IN1",
            size: "1",
            bitmask: "255",
            units: "",
            value: "15",
            Help:
              "Assign scene activation trigger for IN1 terminal.  Default: Everything",
            BitSet: [
              {
                id: "1",
                Label: "click/toggle 1 time to trigger",
                Help:
                  "Click/toggle the connected switch 1 time to trigger a scene.",
              },
              {
                id: "2",
                Label: "click/toggle 2 times to trigger",
                Help:
                  "Click/toggle the connected switch 2 times to trigger a scene.",
              },
              {
                id: "3",
                Label: "click/toggle 3 times to trigger",
                Help:
                  "Click/toggle the connected switch 3 times to trigger a scene.",
              },
              {
                id: "4",
                Label: "click/toggle 4 times to trigger",
                Help:
                  "Click/toggle the connected switch 4 times to trigger a scene.",
              },
            ],
          },
          {
            type: "bitset",
            genre: "config",
            index: "41",
            label: "Scene Control for IN2",
            size: "1",
            bitmask: "255",
            units: "",
            value: "15",
            Help:
              "Assign scene activation trigger for IN2 terminal.  Default: Everything",
            BitSet: [
              {
                id: "1",
                Label: "click/toggle 1 time to trigger",
                Help:
                  "Click/toggle the connected switch 1 time to trigger a scene.",
              },
              {
                id: "2",
                Label: "click/toggle 2 times to trigger",
                Help:
                  "Click/toggle the connected switch 2 times to trigger a scene.",
              },
              {
                id: "3",
                Label: "click/toggle 3 times to trigger",
                Help:
                  "Click/toggle the connected switch 3 times to trigger a scene.",
              },
              {
                id: "4",
                Label: "click/toggle 4 times to trigger",
                Help:
                  "Click/toggle the connected switch 4 times to trigger a scene.",
              },
            ],
          },
          {
            type: "bitset",
            genre: "config",
            index: "42",
            label: "Scene Control for IN3",
            size: "1",
            bitmask: "255",
            units: "",
            value: "15",
            Help:
              "Assign scene activation trigger for IN3 terminal.  Default: Everything",
            BitSet: [
              {
                id: "1",
                Label: "click/toggle 1 time to trigger",
                Help:
                  "Click/toggle the connected switch 1 time to trigger a scene.",
              },
              {
                id: "2",
                Label: "click/toggle 2 times to trigger",
                Help:
                  "Click/toggle the connected switch 2 times to trigger a scene.",
              },
              {
                id: "3",
                Label: "click/toggle 3 times to trigger",
                Help:
                  "Click/toggle the connected switch 3 times to trigger a scene.",
              },
              {
                id: "4",
                Label: "click/toggle 4 times to trigger",
                Help:
                  "Click/toggle the connected switch 4 times to trigger a scene.",
              },
            ],
          },
          {
            type: "bitset",
            genre: "config",
            index: "43",
            label: "Scene Control for IN4",
            size: "1",
            bitmask: "255",
            units: "",
            value: "15",
            Help:
              "Assign scene activation trigger for IN4 terminal.  Default: Everything",
            BitSet: [
              {
                id: "1",
                Label: "click/toggle 1 time to trigger",
                Help:
                  "Click/toggle the connected switch 1 time to trigger a scene.",
              },
              {
                id: "2",
                Label: "click/toggle 2 times to trigger",
                Help:
                  "Click/toggle the connected switch 2 times to trigger a scene.",
              },
              {
                id: "3",
                Label: "click/toggle 3 times to trigger",
                Help:
                  "Click/toggle the connected switch 3 times to trigger a scene.",
              },
              {
                id: "4",
                Label: "click/toggle 4 times to trigger",
                Help:
                  "Click/toggle the connected switch 4 times to trigger a scene.",
              },
            ],
          },
          {
            type: "short",
            genre: "config",
            index: "62",
            label: "Power Report Frequency",
            size: "2",
            min: "0",
            max: "32400",
            value: "3600",
            units: "seconds",
            Help:
              "Power Report Frequency. Choose how often you want your RGBW Dimmer to report power consumption (W) to your controller.  NOTE: must be 0, or an increment of 30.  Default: 3600",
          },
          {
            type: "short",
            genre: "config",
            index: "65",
            label: "Energy Report Threshold",
            size: "2",
            min: "0",
            max: "500",
            value: "10",
            Help:
              "Energy Report Threshold.  Choose how you want your RGBW Dimmer to report energy use (kWh) to your hub.  The number entered as value corresponds to decimal values in energy useage change. So if 10 is entered by default, the RGBW Dimmer will report any change in energy use over 0.1 kWh. Energy reports are sent in t least 30-second intervals.",
          },
          {
            type: "short",
            genre: "config",
            index: "66",
            label: "Energy Report Frequency",
            size: "2",
            min: "0",
            max: "32400",
            value: "3600",
            units: "seconds",
            Help:
              "Energy Report Frequency. Choose how often you want your RGBW Dimmer to report energy (kWh) to your controller.  NOTE: must be 0, or an increment of 30.  Default: 3600",
          },
          {
            type: "list",
            genre: "config",
            index: "150",
            label: "RGBW/HSB Wall Switch Mode",
            size: "1",
            min: "0",
            max: "1",
            value: "0",
            Help:
              "RGBW/HSB Wall Switch Mode.  Choose how switches connected to the input terminals control your LED strip. In the default RGBW mode, each switch connected to each input terminal controls the RGBW chnnels separately (so IN1 for red, IN2 for green, etc.) with a single click for ON/OFF, double click to full brightness, and press-and-hold to dim (momentary switches only). In the HSB, IN1 controls hue, IN2 - saturation, IN3 - brightness, IN4 - white with single click for last set value or value 0, double click to max value, and press-and-hold to set custom value.  Default: RGBW mode",
            Item: [
              { label: "RGBW mode", value: "0" },
              { label: "HSB mode", value: "1" },
            ],
          },
          {
            type: "short",
            genre: "config",
            index: "151",
            label: "Ramp Rate (switch)",
            size: "2",
            min: "0",
            max: "127",
            value: "3",
            units: "seconds",
            Help:
              "Ramp Rate (switch).  Adjust the ramp rate for your RGBW dimmer (fade-in/fade-out effect for on/off operation).  Values correspond to the number of seconds it takes for the dimmer to reach full brightness or turn off when operated from the connected wall switch.  Note that 0 is instant on/off.  Default : 3 seconds",
          },
          {
            type: "short",
            genre: "config",
            index: "152",
            label: "Ramp Rate (Z-Wave)",
            size: "2",
            min: "0",
            max: "127",
            value: "3",
            units: "seconds",
            Help:
              "Ramp Rate (Z-Wave).  Adjust the ramp rate for your RGBW dimmer (fade-in/fade-out effect for on/off operation).  Values correspond to the number of seconds it takes for the dimmer to reach full brightness or turn off when operated remotely from the Z-Wave hub  Note that 0 is instant on/off.  Default : 3 seconds",
          },
          {
            type: "list",
            genre: "config",
            index: "157",
            label: "Preset Programs",
            size: "1",
            min: "0",
            max: "10",
            value: "0",
            Help:
              "Enable one of the preset animated color programs to set the mood with a click.  Default: preset programs disabled",
            Item: [
              { label: "preset programs disabled", value: "0" },
              { label: "fireplace", value: "6" },
              { label: "storm", value: "7" },
              { label: "rainbow", value: "8" },
              { label: "polar lights", value: "9" },
              { label: "police", value: "10" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "10",
            Group: [
              { index: "1", max_associations: "1", label: "Lifeline" },
              {
                index: "2",
                max_associations: "5",
                label: "Zooz RGBW Dimmers only",
              },
              { index: "3", max_associations: "5", label: "IN1 on/off sync" },
              {
                index: "4",
                max_associations: "5",
                label: "IN1 Brightness sync",
              },
              { index: "5", max_associations: "5", label: "IN2 on/off sync" },
              {
                index: "6",
                max_associations: "5",
                label: "IN2 Brightness sync",
              },
              { index: "7", max_associations: "5", label: "IN3 on/off sync" },
              {
                index: "8",
                max_associations: "5",
                label: "IN3 Brightness sync",
              },
              { index: "9", max_associations: "5", label: "IN4 on/off sync" },
              {
                index: "10",
                max_associations: "5",
                label: "IN4 Brightness sync",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
