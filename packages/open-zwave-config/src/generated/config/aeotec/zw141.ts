import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 6,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0086:008D:0103",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/zw141.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3693",
            id: "008D",
            name: "ZWProductPage",
            type: "0103",
          },
          {
            text:
              "https://products.z-wavealliance.org/ProductManual/File?folder=&filename=product_documents/3693/Nano%20Shutter%20-%20Product%20Manual.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Press and hold the Action button that you can find on the product's housing for 20 seconds and then release. This procedure should only be used when the primary controller is inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "Turn the primary controller of Z-Wave network into exclusion mode, quick press the product’s Action button 6 times that you can find on the product's housing or toggle the external manual switch 2 times in fast succession. If the Nano Dimmer has been successfully removed from your Z-Wave network, its RGB LED will remain colorful gradient. If the removal was unsuccessful, the RGB LED will still be solid (following the state of the output load), repeat the instructions above from step 1.",
            name: "ExclusionDescription",
          },
          { text: "Nano Shutter", name: "Name" },
          {
            text:
              "Aeotec New Generation Nano Shutter 1. Used to control the motor of Curtain, support Shutter Mode and Venetian Mode . 2. Can be calibrated according to diff e rent curtains 3. Used to control other Z-Wave device directly. 4. Support S2, more safe and more re liable 5. Support SmartStart, faster inclusion",
            name: "Description",
          },
          { text: "ZW141-C", id: "008D", name: "Identifier", type: "0003" },
          {
            text: "CEPT (Europe)",
            id: "008D",
            name: "FrequencyName",
            type: "0003",
          },
          {
            text: "https://products.z-wavealliance.org/Products/3693",
            id: "008D",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text:
              "1. Set your z-wave controller into 'Add Device' mode to add the product into your z-wave network. Refer to the controller's manual if you are unsure of how to perform this step.\n      2. Make sure the product is powered on. If not, plug it into a wall socket and power on; the LED will flash a blinking blue light. \n      3. Click the action button once, the LED should flash a blue light for 30 seconds until the product is added into the network. The LED will flash a bright yellow light after being assigned a NodeID. \n      4. If your z-wave controller supports S2 encryption, enter the first 5 digits of the DSK into your controller's interface if/when requested. The DSK is printed on its housing. \n      5. If inclusion fails, the LED will flash a bright red light for 2 second and then flash a blinking blue light; repeat steps 1 to 4. Contact us for further support if needed. \n      6. If inclusion succeeds, the LED will flash a bright blue light for 2 second and then turn to load indicator mode to indicate the product has been added to your z-wave network successfully. You can configure the product and its automations via your smart home automation platform; please refer to your software's user guide for details.",
            name: "InclusionDescription",
          },
          {
            text:
              "1. Set your z-wave controller into 'Remove Device' mode to remove the product from your z-wave network. Refer to the controller's manual if you are unsure of how to perform this step. \n      2. Click the action / S1 / S2 button 6 times to enter exclusion mode. \n      3. If removal fails, the LED will flash bright red for 2 seconds and then turn return to regular light mode; repeat steps 1-2. Contact us for further support if needed. \n      4. If removal succeeds, the LED will flash a blinking blue light to indicate the product has been removed from the z-wave network successfully.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Press and hold the action button for at least 20 second and then release. The LED will blink a blue light to indicate the factory reset was successful. Otherwise, please try again. Contact us for further support if needed. \n      This procedure should only be used when the primary controller is missing or inoperable. \n      Factory reset will: a) remove the product from your z-wave network; and b) delete the association setting.",
            name: "ResetDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "008D",
            name: "FrequencyName",
            type: "0103",
          },
          { text: "ZW141-A", id: "008D", name: "Identifier", type: "0103" },
          { text: "ZW141-B", id: "008D", name: "Identifier", type: "0203" },
          {
            text: "Australia / New Zealand",
            id: "008D",
            name: "FrequencyName",
            type: "0203",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2903/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2907/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2953/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3075/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/Products/3693/XML",
                author: "Duy Nguyen - dooz127@gmail.com",
                date: "16 Feb 2020",
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
            index: "20",
            label: "Motor behavior after powering on",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "Set the motor behavior after powering on",
            Item: [
              { label: "Stay the same position", value: "0" },
              { label: "Move to 99%", value: "1" },
              { label: "Move to 0%", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "22",
            label: "Motor direction",
            size: "1",
            type: "list",
            units: "",
            value: "2",
            Help: "Set to toggle the motor running direction",
          },
          {
            genre: "config",
            index: "34",
            label: "Blade turn time",
            size: "2",
            max: "32767",
            min: "10",
            type: "decimal",
            units: "0.01 seconds",
            value: "150",
            Help:
              "Set the blade turn time for Venetian mode. Details can be found in section 4.2 of Advanced information Product Manual.",
          },
          {
            genre: "config",
            index: "35",
            label: "Curtain trip time",
            size: "2",
            max: "32767",
            min: "500",
            type: "decimal",
            units: "0.01 seconds",
            value: "15000",
            Help:
              "Set the run time of the curtain. Details can be found in section 4.2 of Advanced information Product Manual.",
          },
          {
            genre: "config",
            index: "36",
            label: "Enter/exit calibration mode",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            write_only: "true",
            Help: "Set to enter/exit calibration mode",
            Item: [
              {
                label:
                  "Set: Exit calibration mode/Report: Not in calibration mode",
                value: "0",
              },
              {
                label:
                  "Set: Enter shutter mode calibration/Report: in shutter mode calibration",
                value: "1",
              },
              {
                label:
                  "Set: Enter Venetian mode calibration/Report: in Venetian mode calibration",
                value: "2",
              },
            ],
          },
          {
            genre: "config",
            index: "37",
            label: "User confirmation for calibration",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            write_only: "true",
            Help: "Set user confirmation for calibration",
          },
          {
            genre: "config",
            index: "38",
            label: "Calibration mode status report",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            read_only: "true",
            Help: "Get calibration mode status report",
            Item: [
              { label: "Calibration mode complete", value: "0" },
              {
                label: "Start calibration mode, going to reference point A",
                value: "1",
              },
              {
                label: "Reach reference point A, going to reference point B",
                value: "2",
              },
              {
                label:
                  "Reach reference point B, waiting for blade turn calibration",
                value: "3",
              },
              { label: "Going to reference point C", value: "4" },
              { label: "Calibration mode terminated", value: "5" },
            ],
          },
          {
            genre: "config",
            index: "39",
            label: "Curtain mode opeation",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "Set the curtain mode operation",
            Item: [
              { label: "Shutter mode", value: "0" },
              { label: "Venetian mode", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "40",
            label: "Repositioning",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            write_only: "true",
            Help: "Set to begin repositioning",
          },
          {
            genre: "config",
            index: "41",
            label: "Repositioning status report",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            read_only: "true",
            Help: "Get repositioning status report",
            Item: [
              { label: "Repositioning complete", value: "0" },
              { label: "In repositioning", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "42",
            label: "Calibration lock",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help: "Enable/disable calibration lock",
            Item: [
              { label: "Disable calibration", value: "0" },
              { label: "Enable calibration", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "48",
            label: "S1 scene activation",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "Set S1 scene activation",
            Item: [
              { label: "Enable S1 'Key pressed one time'", value: "1" },
              { label: "Enable S1 'Key released'", value: "2" },
              { label: "Enable S1 'Key held down'", value: "4" },
              { label: "Enable S1 'Key pressed two times'", value: "8" },
            ],
          },
          {
            genre: "config",
            index: "49",
            label: "S2 scene activation",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "Set S1 scene activation",
            Item: [
              { label: "Enable S2 'Key pressed one time'", value: "1" },
              { label: "Enable S2 'Key released'", value: "2" },
              { label: "Enable S2 'Key held down'", value: "4" },
              { label: "Enable S2 'Key pressed two times'", value: "8" },
            ],
          },
          {
            genre: "config",
            index: "80",
            label: "Type of status report",
            size: "1",
            type: "list",
            units: "",
            value: "2",
            Help: "Select which report to send when switch status changes",
            Item: [
              { label: "No report", value: "0" },
              { label: "Basic report", value: "1" },
              { label: "Switch multilevel report", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "85",
            label: "External button mode operation",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "\n        Set operation mode of external button. \n        In Operation Mode 1, external button 1 maps to z-wave button, external button 2 opens or stops motor.\n        In Operation Mode 2, external button 1 maps to z-wave button, external button 2 closes or stops motor.\n      ",
            Item: [
              { label: "Operation Mode 1", value: "0" },
              { label: "Operation Mode 2", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "120",
            label: "Set external switch mode for S1",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "When the mode is determined, this mode value will not be reset after exclusion",
            Item: [
              { label: "Unidentified", value: "0" },
              { label: "2-state switch", value: "1" },
              { label: "3-way switch", value: "2" },
              { label: "Push button", value: "3" },
              { label: "Automatic identification mode", value: "4" },
            ],
          },
          {
            genre: "config",
            index: "121",
            label: "Set external switch mode for S2",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "When the mode is determined, this mode value will not be reset after exclusion",
            Item: [
              { label: "Unidentified", value: "0" },
              { label: "2-state switch", value: "1" },
              { label: "3-way switch", value: "2" },
              { label: "Push button", value: "3" },
              { label: "Automatic identification mode", value: "4" },
            ],
          },
          {
            genre: "config",
            index: "243",
            label: "DSK",
            size: "16",
            type: "string",
            units: "",
            value: "0",
            read_only: "true",
            Help: "Get the DSK from the product",
          },
          {
            genre: "config",
            index: "248",
            label: "S1 and S2 operation",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help: "Set the operation of external switches S1 and S2",
            Item: [
              { label: "Enable network inclusion/exclusion", value: "1" },
              { label: "Enable reset to factory defaults", value: "2" },
              {
                label: "Enable network function and reset to factory defaults",
                value: "3",
              },
            ],
          },
          {
            genre: "config",
            index: "255",
            label: "Reset to factory defaults",
            size: "4",
            type: "list",
            value: "0",
            write_only: "true",
            Help: "Reset to factory defaults",
            Item: [
              { label: "Reset to factory default setting", value: "0" },
              {
                label:
                  "Reset to factory default setting and remove from the z-wave network",
                value: "1431655765",
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
              { index: "2", label: "Retransmit", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
