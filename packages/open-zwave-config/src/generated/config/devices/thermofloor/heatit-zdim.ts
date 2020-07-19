import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/019b:2200:0003",
            name: "OzwInfoPage",
          },
          { text: "images/thermofloor/heatit_zdim.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3261",
            id: "2200",
            name: "ZWProductPage",
            type: "0003",
          },
          { text: "Zdim", id: "2200", name: "Identifier", type: "0003" },
          {
            text:
              "https://products.z-wavealliance.org/ProductManual/File?folder=&filename=product_documents/3261/Manual_Heatit_Z-DIM_FW%201.0_Ver2019-A_ENG.pdf",
            name: "ProductManual",
          },
          {
            text:
              'Z-Wave rotary dimmer for different light sources. The LED dimmer dims at low load without the light flickering. Dimmer LED from 1-200VA, 230V halogen and incandescent bulbs, dimmable LED drivers and electronic transformers. Not affected by additional starting currents. Need L + N conductor connected.\r\nThe dimmer has end-turn function. This allows you to turn on the light and dimming with one dimmer, and then turn off the light with another dimmer. Convenient for example in stairs and corridors.\r\nThe dimmer fits into standard Elko, Schneider Exxact and Gira System 55 frame systems.\r\n\r\nFUNCTIONS\r\n- Z-wave rotary dimmer\r\n- Scene controller\r\n- Dims:\r\n- LED\r\n- 230V halogen\r\n- Incandescent lightbulbs\r\n- Dimable LED-drivers\r\n- Electronic transformators\r\n- Starts at 1VA and dims up to 200VA LED\r\n- Trailing edge\r\n- Multiway switching option\r\n- Electronic thermal cutoff with automatic reset\r\n- Firmware updates (OTA)\r\n- Power metering\r\n- Supports encryption mode: S0, S2 Authenticated Class, S2 Unauthenticated Class\r\n\r\nCONNECTION\r\n1. Disconnect the power.\r\n2. Connect the live to the dimmer terminal marked "L".\r\n3. Connect the neutral to the dimmer terminal marked "N".\r\n4. Connect the neutral to the load terminal marked "N".\r\n5. Connect the load terminal marked "L" to the dimmer terminal marked (see wiring\r\n diagram).\r\n6. Install the dimmer (A) in the wall box. Make sure that no wires are pinched.\r\n7. Attach the cover (B) with the supplied nut (C).\r\n8. Attach the button (D) with a simple push.\r\nTo use the multiway function (stairway function) a 230VAC rated momentary switch\r\ncan be connected as follows:\r\n9. Connect the live to the toggle switch terminal marked "L".\r\n10. Connect the toggle switch terminal marked to the dimmer terminal marked "S"\r\n (see wiring diagram).\r\n\r\nTECHNICAL DATA\r\nProtocol Z-Wave, 868,4MHz\r\nChip Z-Wave 500 chip\r\nSDK 6.71.03\r\nRated voltage 230V AC 50Hz\r\nPower 1VA - 200VA\r\nInput current 0,9A\r\nControls Push and rotary dimmer\r\nOperating temperature -20°C - 40 °C\r\nConnection Max. 2,5mm2\r\nFlush mounting depth 15mm\r\nIP Code IP 20\r\nSize (LxWxH) 84 x 84 x 43mm\r\n\r\nAPPROVALS\r\nZ-Wave Plus\r\nCE\r\nEN 55015/A2: 2009, EN 61547:2009\r\nEN 61000-3-2/A2:2009\r\nEN 61000-3-3:2008\r\nEN 60669-2-1/A12:2010\r\nEN 60669-1:A2:2008\r\nEMC 2014/30/EU, RoHS 2011/65/EU\r\nLVD 2014/35/EU',
            name: "Description",
          },
          {
            text:
              "INCLUSION/EXCLUSION\r\nPress the main button on dimmer 6 times in a rapid sequence. Heatit Z-DIM is now included in your Z-Wave network.",
            name: "ExclusionDescription",
          },
          {
            text: "CEPT (Europe)",
            id: "2200",
            name: "FrequencyName",
            type: "0003",
          },
          { text: "Heatit Zdim", name: "Name" },
          {
            text:
              'FACTORY RESET - RES\r\nBy pressing and holding the main button for 20 seconds, the dimmer will perform\r\na complete factory reset. The connected light source will blink once and go in the\r\n"OFF" state if successfully reset. NB! Please use this procedure only when the primary\r\ncontroller is missing or otherwise inoperable',
            name: "ResetDescription",
          },
          {
            text:
              "INCLUSION/EXCLUSION\r\nPress the main button on dimmer 6 times in a rapid sequence. Heatit Z-DIM is now included in your Z-Wave network.",
            name: "InclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text: "Initial release",
                author: "Pål Kristensen - paalkr77@gmail.com",
                date: "10 January 2020",
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
            genre: "config",
            instance: "1",
            index: "1",
            value: "0",
            label: "Connected Load",
            size: "1",
            min: "0",
            max: "200",
            type: "byte",
            Help:
              '\r\nThe parameter defines the value of connected load. Refer to Paragraph 8 "Power Metering". \r\n0 = Default\r\n1 - 200 = 1-200 Watts connected load\r\n\r\nPOWER METERING\r\nThe Heatit Z-Dim has functionality to calculate power consumption. To enable this\r\nfunction, Parameter 1 "Connected load" should have a value greater than 0. This is an\r\nestimated value, therefore power consumption accuracy depends on load estimation.\r\n1. Estimate the load value (Watt) connected to the Heatit Z-Dim.\r\n2. Use this value in Parameter 1.\r\nHeatit Z-Dim can report accumulated (kWh) and instant (Watt), or only instant (Watt)\r\npower consumption. The report time interval can be altered by Parameter 9. \r\n\t  ',
          },
          {
            genre: "config",
            instance: "1",
            index: "2",
            value: "20",
            label: "Minimum Dim level",
            units: "%",
            size: "1",
            min: "1",
            max: "98",
            type: "byte",
            Help:
              '\r\nThe parameter defines the lowest dimming level of the dimmer. The value must be lower than parameter 3 "Maximum Dim Level"\t  \r\n1% - 98% Default is 20 (20%)\r\n\t  ',
          },
          {
            genre: "config",
            instance: "1",
            index: "3",
            value: "85",
            label: "Maximum Dim level",
            units: "%",
            size: "1",
            min: "2",
            max: "99",
            type: "byte",
            Help:
              '\r\nThe parameter defines the highest dimming level of the dimmer.\r\nThe value must be higher than parameter 2 "Minimum Dim Level"\r\n2% - 99% Default is 85 (85%)\t  \r\n\t  ',
          },
          {
            genre: "config",
            instance: "1",
            index: "4",
            value: "15",
            label: "Total steps",
            units: "step",
            size: "1",
            min: "5",
            max: "255",
            type: "byte",
            Help:
              "\r\nThe parameter defines how many steps it should take to dim from minimum\r\nto maximum dim level (One round = 20 steps).\r\n5 - 255 = 5-255 steps. Default is 15 (3/4 round)\r\n\t  ",
          },
          {
            genre: "config",
            instance: "1",
            index: "5",
            value: "0",
            label: "Double press function",
            size: "1",
            type: "list",
            Help: "The parameter defines the double press functionality. ",
            Item: [
              { value: "0", label: "Central Scene notification (Default)" },
              { value: "1", label: "Dim to highest level" },
            ],
          },
          {
            genre: "config",
            instance: "1",
            index: "6",
            value: "1",
            label: "Scene controller",
            size: "1",
            type: "list",
            Help: "Enables scene controller",
            Item: [
              { value: "0", label: "Disabled" },
              { value: "1", label: "Active (Default)" },
            ],
          },
          {
            genre: "config",
            instance: "1",
            index: "7",
            value: "0",
            label: "Switch ON level",
            units: "%",
            size: "1",
            min: "0",
            max: "99",
            type: "byte",
            Help:
              "\r\nThe parameter defines the dimming level when restored from the OFF state\r\nby push button. \r\n0 = Restores last dim level (Default)\r\n1 - 99 = 1% - 99%\r\n\t  ",
          },
          {
            genre: "config",
            instance: "1",
            index: "8",
            value: "1",
            label: "Dimming Duration",
            units: "time",
            size: "1",
            min: "0",
            max: "255",
            type: "byte",
            Help:
              "\r\nThe parameter defines how long it takes to dim to the desired level.\r\nNote! Only Multilevel Switch Command Class is affected by this parameter. \r\n0 = Disabled\r\n1 - 127 = Duration in seconds (1 - 127 seconds. Default is 1)\r\n128 - 255 = Duration in minutes (1 - 127 minutes)\r\n\t  ",
          },
          {
            genre: "config",
            instance: "1",
            index: "9",
            value: "60",
            label: "Meter Report Interval",
            units: "sec",
            size: "2",
            min: "0",
            max: "32767",
            type: "short",
            Help:
              "\r\nThe parameter defines the report interval for Power Metering.\r\n30 - 32767 = Duration in seconds (30 - 32 767. Default is 60)\r\n\t  ",
          },
          {
            genre: "config",
            instance: "1",
            index: "10",
            value: "50",
            label: "Power restore level",
            units: "%",
            size: "1",
            min: "1",
            max: "99",
            type: "byte",
            Help:
              "\r\nThe parameter defines the initial dimming level after power loss.\r\n1 - 99 = 1% - 99% Default is 50 (50%)\r\n\t  ",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "3",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "8" },
              {
                index: "2",
                label: "Dimming level",
                max_associations: "8",
                auto: "true",
              },
              {
                index: "3",
                label: "State of Device ON/OFF",
                max_associations: "8",
                auto: "true",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
