import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 6,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0159:0052:0007",
            name: "OzwInfoPage",
          },
          { text: "images/qubino/ZMNHTDx.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3018/",
            id: "0052",
            name: "ZWProductPage",
            type: "0007",
          },
          {
            text:
              "FACTORY RESET\n1. Connect the device to the power supply\n2. Press and hold the S service button between 6 seconds and 20 seconds\n3. Device will be removed from you network\nⓘ By resetting the device, all custom parameters previously set on the device will return to their default values, and the owner ID will be deleted. Use this reset procedure only when the main gateway (hub) is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "The Qubino Smart Meter can be used in residential, industrial and utility applications. It measures energy directly in 2-wire networks by means of fast sampling of voltage and current signals. It calculates energy, power and power factor from the measured signals. You can control the device through the Z-Wave network. \nThe Qubino Smart Meter can operate across a wide temperature range, from a chilly -15˚C to a scorching 55˚C (5˚F–131˚F). Every device also acts as a repeater in order to improve the range and stability of the Z-Wave network.",
            name: "Description",
          },
          { text: "Smart Meter", name: "Name" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/3018/Qubino_Smart Meter PLUS extended manual_eng_2.3.pdf",
            name: "ProductManual",
          },
          { text: "ZMNHTD1", id: "0052", name: "Identifier", type: "0007" },
          {
            text:
              "AUTOMATICALLY ADDING THE DEVICE TO A Z-WAVE NETWORK (AUTO INCLUSION)\n1. Enable add/remove mode on your Z-Wave gateway (hub)\n2. Automatic selection of secure/unsecure inclusion\n3. The device can be automatically added to a Z-Wave network during the first 2 minutes \n4. Connect the device to the power supply  \n5. Auto-inclusion will be initiated within 5 seconds of connection to the power supply and the device will automatically enrol in your network\nⓘ NOTE: For S2 inclusion please check chapter – »16. Z-Wave Security«.  \nMANUALLY ADDING THE DEVICE TO A Z-WAVE NETWORK (MANUAL INCLUSION)\n1. Connect the device to the power supply \n2. Enable add/remove mode on your Z-Wave gateway (hub)\n2. Toggle the Service button S between 0.2 and 6 seconds \n3. A new multi-channel device will appear on your dashboard",
            name: "InclusionDescription",
          },
          {
            text: "CEPT (Europe)",
            id: "0052",
            name: "FrequencyName",
            type: "0007",
          },
          {
            text:
              "REMOVAL FROM A Z-WAVE NETWORK (Z-WAVE EXCLUSION)\n1. Connect the device to the power supply\n2. Make sure the device is within direct range of your Z-Wave gateway (hub) or use a hand-held Z-Wave remote to perform exclusion \n3. Enable add/remove mode on your Z-Wave gateway (hub)\n4. Press and hold the S service button between 0.2 and 6 seconds \n5. The device will be removed from your network but custom configuration parameters will not be erased",
            name: "ExclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3018/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 4,
              },
              {
                text:
                  "Add MapRootToEndpoints and Instance Labels. Note - You will get a Timeout Message when getting a MultiChannelAssociation Get Message. Qubino are aware of this issue. It should not affect the operation of the device.",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "12 Jun 2019",
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
            index: "7",
            instance: "1",
            label: "Input 1 switch function selection",
            max: "5",
            min: "0",
            size: "1",
            type: "list",
            value: "4",
            Help: "Default value 4",
            Item: [
              { label: "Disabled", value: "0" },
              {
                label: "IR external relay control - mono stable push button",
                value: "2",
              },
              {
                label: "IR external relay control - bi stable switch",
                value: "3",
              },
              {
                label: "External relay control - mono stable push button",
                value: "4",
              },
              {
                label: "External relay control - bi stable switch",
                value: "5",
              },
            ],
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label: "Activate / deactivate functions ALL ON/ALL OFF",
            max: "255",
            min: "0",
            size: "2",
            type: "list",
            value: "255",
            Help:
              "Smart meter module responds to commands ALL ON / ALL OFF that may be sent by the main controller or by other controller belonging to the system.\n\t\t\t\tDefault value 255.\n\t\t\t",
            Item: [
              { label: "ALL ON active, ALL OFF active", value: "255" },
              {
                label: "ALL ON is not active, ALL OFF is not active",
                value: "0",
              },
              { label: "ALL ON is not active, ALL OFF active", value: "1" },
              { label: "ALL ON active, ALL OFF is not active", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "11",
            instance: "1",
            label:
              "Automatic turning off IR external relay output after set time",
            max: "32536",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "0 - Auto OFF disabled.\n\t\t\t\t1 second to 32536 seconds Auto OFF enabled with defined time, step is 1 second.\n\t\t\t\tDefault value 0.\n\t\t\t",
          },
          {
            genre: "config",
            index: "12",
            instance: "1",
            label:
              "Automatic turning on IR external relay output after set time",
            max: "32535",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "0 - Auto ON disabled.\n\t\t\t\t1 second to 32535 seconds Auto ON enabled with defined time, step is 1 second.\n\t\t\t\tDefault value 0.\n\t\t\t",
          },
          {
            genre: "config",
            index: "13",
            instance: "1",
            label: "Automatic turning off External relay output after set time",
            max: "32536",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "0 - Auto OFF disabled.\n\t\t\t\t1 second to 32536 seconds Auto OFF enabled with defined time, step is 1 second.\n\t\t\t\tDefault value 0.\n\t\t\t",
          },
          {
            genre: "config",
            index: "14",
            instance: "1",
            label: "Automatic turning on External relay output after set time",
            max: "32535",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "0 - Auto ON disabled.\n\t\t\t\t1 second to 32535 seconds Auto ON enabled with defined time, step is 1 second.\n\t\t\t\tDefault value 0.\n\t\t\t",
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
            value: "10",
            Help:
              "Set value from 0 - 100 (0% - 100%).\n\t\t\t\t0 - Reporting Disabled.\n\t\t\t\t1 - 100 = 1% - 100% Reporting enabled.\n\t\t\t\tPower report is send (push) only when actual power in Watts in real time change for more than set percentage comparing to previous actual power in Watts, step is 1%.\n\t\t\t\tDefault value 10.\n\t\t\t",
          },
          {
            genre: "config",
            index: "42",
            instance: "1",
            label: "Power reporting in Watts by time interval",
            max: "32767",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "Set value means time interval (0 - 32767) in seconds, when power report is send.\n\t\t\t\t0 - Reporting Disabled.\n\t\t\t\t1 second to 32767 seconds reporting enabled.\n\t\t\t\tPower report is send with time interval set by entered value.\n\t\t\t\tDefault value 0.\n\t\t\t",
          },
          {
            genre: "config",
            index: "45",
            instance: "1",
            label: "Reset Power counters",
            max: "15",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Default value 0",
            Item: [
              { label: "No function", value: "0" },
              { label: "Reset counter 1 - KWh", value: "1" },
              { label: "Reset counter 2 - KVARh", value: "2" },
              { label: "Reset counter 3 - KVAh", value: "4" },
              { label: "Reset ALL counters", value: "15" },
            ],
          },
          {
            genre: "config",
            index: "100",
            instance: "1",
            label:
              "Enable /Disable endpoints IR external relay and External relay",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Enabling IR external relay and External relay or both of them, means that endpoint (IR external relay) and endpoint (External relay) or both will be prensent on UI.\n\t\t\t\tDisabling them will result in hiding endpoints according to parameter set value.Note that hiding endpoint has no impact on its functionality.\n\t\t\t\tDefault value 0\n\t\t\t",
            Item: [
              {
                label:
                  "Endpoints IR external relay and External relay disabled",
                value: "0",
              },
              {
                label:
                  "Endpoints IR external relay disabled, External relay enabled",
                value: "1",
              },
              {
                label:
                  "Endpoints IR external relay enabled, External relay disabled",
                value: "2",
              },
              {
                label: "Endpoints IR external relay and External relay enabled",
                value: "3",
              },
            ],
          },
          {
            genre: "config",
            index: "110",
            instance: "1",
            label: "Power auto-triggering relay(s) off",
            max: "15000",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "0 - Pmax auto OFF disabled.\n\t\t\t\t1W to 15000W Auto OFF enabled, step is 1 Watt. Linked with param 111/112.\n\t\t\t\tDefault value 0 (disabled).\n\t\t\t",
          },
          {
            genre: "config",
            index: "111",
            instance: "1",
            label: "Power auto-triggering off-time",
            max: "32535",
            min: "30",
            size: "2",
            type: "short",
            value: "30",
            Help:
              "30s to 32535s Auto OFF time, step is 1 sec, if param 110 pMax is reached.\n\t\t\t\tDefault value 30.\n\t\t\t",
          },
          {
            genre: "config",
            index: "112",
            instance: "1",
            label: "Power auto-triggered OFF relay choice",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Switch OFF IR external relay and/or External relay or both of them, if param 110 pMax is reached.\n\t\t\t\tDefault value 0.\n\t\t\t",
            Item: [
              { label: "Switch OFF IR/Wired external relays", value: "0" },
              { label: "Switch OFF IR       external relay", value: "1" },
              { label: "Switch OFF Wired    external relay", value: "2" },
              { label: "Switch OFF Both     relays", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "130",
            instance: "1",
            label: "Serial NB",
            read_only: "true",
            size: "4",
            type: "int",
            value: "0",
            Help: "Returns device S/N.",
          },
          {
            genre: "config",
            index: "131",
            instance: "1",
            label: "Firmware Version",
            read_only: "true",
            size: "2",
            type: "short",
            value: "0",
            Help: "Returns device FW version.",
          },
          {
            genre: "config",
            index: "132",
            instance: "1",
            label: "Hardware Version",
            read_only: "true",
            size: "2",
            type: "short",
            value: "0",
            Help: "Returns device HW version.",
          },
          {
            genre: "config",
            index: "140",
            instance: "1",
            label: "Voltage U1",
            read_only: "true",
            size: "3",
            type: "int",
            units: "deci-V",
            value: "0",
            Help: "Returns U1 in deci-Volts.",
          },
          {
            genre: "config",
            index: "141",
            instance: "1",
            label: "Intensity I1",
            read_only: "true",
            size: "3",
            type: "int",
            units: "milli-A",
            value: "0",
            Help: "Returns I1 in milli-Amp.",
          },
          {
            genre: "config",
            index: "142",
            instance: "1",
            label: "Active power Pt",
            read_only: "true",
            size: "3",
            type: "int",
            units: "deci-W",
            value: "0",
            Help: "Returns Pt in deci-Watt.",
          },
          {
            genre: "config",
            index: "143",
            instance: "1",
            label: "Reactive power Qt",
            read_only: "true",
            size: "3",
            type: "int",
            units: "deci-kVAR",
            value: "0",
            Help: "Returns Qt in deci-kVAR.",
          },
          {
            genre: "config",
            index: "144",
            instance: "1",
            label: "Power factor PFt",
            read_only: "true",
            size: "4",
            type: "int",
            units: "milli",
            value: "0",
            Help: "Returns PFt(x1000).",
          },
          {
            genre: "config",
            index: "145",
            instance: "1",
            label: "Energy counter 1, active power total (input)",
            read_only: "true",
            size: "4",
            type: "int",
            units: "deci-kWh",
            value: "0",
            Help: "Return Pin in deci-kWh.",
          },
          {
            genre: "config",
            index: "146",
            instance: "1",
            label: "Energy counter 2, reactive power total (input)",
            read_only: "true",
            size: "4",
            type: "int",
            units: "deci-kVARh",
            value: "0",
            Help: "Returns Qin in deci-kVARh.",
          },
          {
            genre: "config",
            index: "147",
            instance: "1",
            label: "Energy counter 3, active power total ",
            read_only: "true",
            size: "4",
            type: "int",
            units: "deci-kVAh",
            value: "0",
            Help: "Returns Pt in deci-kVAh.",
          },
          {
            genre: "config",
            index: "148",
            instance: "1",
            label: "Energy counter 4, active power total (output)",
            read_only: "true",
            size: "4",
            type: "int",
            units: "deci-kWh",
            value: "0",
            Help: "Return Pout in deci-kWh.",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "1" }],
          },
        ],
      },
      { id: "142", Compatibility: [{ ForceInstances: [true] }] },
      { action: "remove", id: "32" },
      {
        id: "96",
        Compatibility: [{ MapRootToEndpoint: [true] }],
        Instance: [
          { index: "1", label: "Total Readings" },
          { index: "2", label: "External Relay" },
          { index: "3", label: "External IR Relay" },
        ],
      },
    ],
  },
};

export default config;
