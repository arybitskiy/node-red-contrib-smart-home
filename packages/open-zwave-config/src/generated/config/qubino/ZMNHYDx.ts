import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0159:0054:0002",
            name: "OzwInfoPage",
          },
          { text: "images/qubino/ZMNHYDx.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3146/",
            id: "0054",
            name: "ZWProductPage",
            type: "0002",
          },
          { text: "Smart Plug 16A", name: "Name" },
          {
            text: "CEPT (Europe)",
            id: "0054",
            name: "FrequencyName",
            type: "0002",
          },
          {
            text:
              "FACTORY RESET\n• The reset is only possible the first minute after the power on\n• Press and hold the service button S more than 6 seconds\n• The device will be removed from your network and the led will start blinking. The device is now in its factory default state.\n• When the S button is held more than 6 seconds after the first minute is passed, the relay should not react!\n\nBy resetting the device, all custom parameters previously set on the device will return to their default values, and the owner ID will be deleted. Use this reset procedure only when the main gateway (hub) is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "The Smart Plug 16A controls on/off function for the connected device. It also measures power consumption of the connected device according to the principle of fast sampling of voltage and current signals. A built-in microprocessor calculates energy and power from the measured signals.",
            name: "Description",
          },
          {
            text:
              "AUTOMATICALLY ADDING THE DEVICE TO A Z-WAVE NETWORK (AUTO INCLUSION)\n1. Enable add/remove mode on your Z-Wave gateway (hub)\n2. Automatic selection of secure/unsecure inclusion\n3. The device can be automatically added to a Z-Wave network during the first 2 minutes\n4. Connect the device to the power supply\n5. Auto-inclusion will be initiated within 5 seconds of connection to the power supply and the device will automatically enrol in your network (when the device is excluded and connected to the power supply it automatically enters the INCLUSION MODE state.)",
            name: "InclusionDescription",
          },
          { text: "ZMNHYD1", id: "0054", name: "Identifier", type: "0002" },
          {
            text:
              "REMOVAL FROM A Z-WAVE NETWORK (Z-WAVE EXCLUSION)\n1. Connect the device to the power supply\n2. Make sure the device is within direct range of your Z-Wave gateway (hub) or use a hand-held Z-Wave remote to perform exclusion\n3. Enable add/remove mode on your Z-Wave gateway (hub)\n4. Press and hold the Service button S from 2 to 6 seconds (with holding the S button for the interval between 2 and 6 seconds you put the device in EXCLUSION MODE)\n5. The device will be removed from your network, but any custom configuration parameters will not be erased",
            name: "ExclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/3146/Qubino_Smart Plug 16A PLUS extended manual_eng_2.5.pdf",
            name: "ProductManual",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3146/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 2,
              },
              {
                text:
                  "Update description for configuration parameter 52 and fix typo",
                author: "Gert van Dijk - gertvdijk@gmail.com",
                date: "10 January 2020",
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
            index: "10",
            instance: "1",
            label: "Functions ALL ON/ALL OFF",
            max: "255",
            min: "0",
            size: "2",
            type: "list",
            value: "255",
            Help:
              "Smart Meter module responds to commands ALL ON / ALL OFF that may be sent by the main controller or by other controller belonging to the system",
            Item: [
              {
                label: "ALL ON is not active ALL OFF is not active",
                value: "0",
              },
              { label: "ALL ON is not active ALL OFF active", value: "1" },
              { label: "ALL ON active ALL OFF is not active", value: "2" },
              { label: "ALL ON active, ALL OFF active", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "11",
            instance: "1",
            label: "Automatic turning off relay after set time",
            max: "32535",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "\n                If Smart plug 16A is ON, you can schedule it to turn OFF automatically after a period of time defined in this parameter.\n                The timer is reset to zero each time the device receives an ON command, either remotely (from the gateway (hub) or associated device) or locally from the switch.\n                0 => Auto OFF disabled.\n                1 - 32535  => 1 second (0,01s) - 32535 seconds (325,35s).\n                Auto OFF enabled with define time, step is 1s or 10ms according to parameter 15. Default value 0\n            ",
          },
          {
            genre: "config",
            index: "12",
            instance: "1",
            label: "Automatic turning on relay after set time",
            max: "32535",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "\n                If Smart plug 16A is OFF, you can schedule it to turn ON automatically after a period of time defined in this parameter.\n                The timer is reset to zero each time the device receives an OFF command, either remotely (from the gateway (hub) or associated device) or locally from the switch.\n                0 - Auto OFF disabled.\n                1 - 32535  => 1 second (0,01s) - 32535 seconds (325,35s).\n                Auto ON enabled with define time, step is 1s or 10ms according to parameter 15. Default value 0\n            ",
          },
          {
            genre: "config",
            index: "15",
            instance: "1",
            label: "Set Timer Units",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n                Choose if you want to set the timer in seconds or milliseconds in parameters 11 and 12.\n            ",
            Item: [
              { label: "Timer set in seconds", value: "0" },
              { label: "Timer set in milliseconds", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "30",
            instance: "1",
            label: "Restore on/off status after power failure",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n                This parameter determines if on/off status is saved and restored for the Smart plug 16A after power failure.\n            ",
            Item: [
              { label: "Restores it after a power failure", value: "0" },
              { label: "Remains off position", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "40",
            instance: "1",
            label: "Power reporting in Watts on power change",
            max: "100",
            min: "0",
            size: "1",
            type: "byte",
            units: "%",
            value: "20",
            Help:
              "\n                Choose by how much power consumption needs to increase or decrease to be reported. Values correspond to percentages so if 20 is set (by default), the device will report any power consumption changes of 20% or more compared to the last reading.\n                Set value from 0 - 100 (0% - 100%).\n                0 - Reporting Disabled.\n                1 - 100 = 1% - 100% Reporting enabled.\n                Power report is send (push) only when actual power in Watts in real time change for more than set percentage comparing to previous actual power in Watts, step is 1%.\n                Default value 20.",
          },
          {
            genre: "config",
            index: "42",
            instance: "1",
            label: "Power reporting in Watts by time interval",
            max: "32767",
            min: "0",
            type: "short",
            units: "seconds",
            value: "300",
            Help:
              "\n                Set value refers to the time interval with which power consumption in Watts is reported (0 - 32535 seconds).\n                If 300 is entered (by default), energy consumption reports will be sent to the gateway (hub) every 300 seconds (or 5 minutes).\n                Set value means time interval (0 - 32767) in seconds, when power report is send.\n                0 - Reporting Disabled.\n                1 second to 32767 seconds reporting enabled.\n                Power report is send with time interval set by entered value.\n                Default value 300 (power report in Watts is send each 300s).\n            ",
          },
          {
            genre: "config",
            index: "50",
            instance: "1",
            label: "Down value",
            max: "4000",
            min: "0",
            size: "2",
            type: "short",
            units: "Watts",
            value: "30",
            Help:
              "\n                Lower power threshold used in param 52.\n                Can not be higher than param 51\n                0-4000 (0.0 to 4000.0W, 0 disables)\n            ",
          },
          {
            genre: "config",
            index: "51",
            instance: "1",
            label: "Up value",
            max: "4000",
            min: "0",
            size: "2",
            type: "short",
            units: "Watts",
            value: "50",
            Help:
              "\n                Upper power threshold used in param 52.\n                Can not be higher than param 50\n                0-4000 (0.0 to 4000.0W, 0 disables)\n            ",
          },
          {
            genre: "config",
            index: "52",
            instance: "1",
            label: "Action in case of exceeding power values (param 50/51)",
            max: "6",
            min: "0",
            size: "1",
            type: "list",
            value: "6",
            Help:
              "\n                Parameter defines the way 3rd association group devices are controlled, depending on the current power load.\n            ",
            Item: [
              { label: "Disable", value: "0" },
              {
                label:
                  "1 - Turn on once the power drops below value of param 50",
                value: "1",
              },
              {
                label:
                  "2 - Turn off once the power drops below value of param 50",
                value: "2",
              },
              {
                label:
                  "3 - Turn on once the power rises above value of param 51",
                value: "3",
              },
              {
                label:
                  "4 - Turn off once the power rises above value of param 51",
                value: "4",
              },
              { label: "1 and 4 combined", value: "5" },
              { label: "2 and 3 combined", value: "6" },
            ],
          },
          {
            genre: "config",
            index: "70",
            instance: "1",
            label: "Overload safety switch",
            max: "4000",
            min: "0",
            size: "2",
            type: "short",
            units: "Watts",
            value: "0",
            Help:
              "\n                The function allows for turning off the controlled device in case of exceeding the defined power for more than 3.1s.\n                Controlled device can be turned back on by S-button or sending a control frame. By default this function is inactive.\n                1-4000 (1-4000W) 0 disables\n            ",
          },
          {
            genre: "config",
            index: "249",
            instance: "1",
            label: "Reporting on set command",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "\n                Using this parameter it is possible to enable/disable reporting after the set command (i.e. Basic set).\n            ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "5",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              {
                index: "2",
                label: "Plug status Basic On/Off",
                max_associations: "5",
              },
              {
                index: "3",
                label: "Basic On/Off depending on the current load",
                max_associations: "5",
              },
              {
                index: "4",
                label: "Secure Encapsulated Plug status basic On/Off",
                max_associations: "5",
              },
              {
                index: "5",
                label:
                  "Secure Encapsulated Basic On/Off depending on the current load",
                max_associations: "5",
              },
            ],
          },
        ],
      },
      { action: "remove", id: "32" },
    ],
  },
};

export default config;
