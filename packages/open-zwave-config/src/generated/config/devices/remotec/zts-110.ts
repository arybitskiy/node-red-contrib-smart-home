import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/5254:8031:0200",
            name: "OzwInfoPage",
          },
          { text: "images/remotec/zts-110.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/679/",
            id: "8031",
            name: "ZWProductPage",
            type: "0200",
          },
          { text: "BW8031US", id: "8031", name: "Identifier", type: "0200" },
          { text: "ZTS-110US Thermostat", name: "Name" },
          {
            text: "U.S. / Canada / Mexico",
            id: "8031",
            name: "FrequencyName",
            type: "0200",
          },
          {
            text:
              "http://www.remotec.com.hk/photos/software/Z-wave/ZTS-100_User_Manual_V10_20120615.pdf",
            name: "ProductSupport",
          },
          {
            text:
              "The ZTS-100 Z-Thermostat is a comfort control master that allows to control your room temperature with programmable time schedule WAKE, AWAY, HOME and SLEEP event which can maximize energy conservation and comfort while minimizing the effort required to maintain the appropriate temperature in your home whether you are at home or away. \n\nAlso, it can be utilized to control / check your room temperature by the smart phone or PC while you are at office, home anywhere or around the world which can go through the Z-Wave gateway control.",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/679/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 4,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      { id: "67", Compatibility: [{ Base: [0] }] },
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            label: "Swing",
            max: "4",
            min: "0",
            size: "1",
            type: "byte",
            value: "2",
            Help:
              "\n\t\t\t\tSwing is the difference allowed from current temp to setpoint before the thermostat turns on.\n\t\t\t\tEG: A swing of 2 and setpoint of 70 means the heat turns on at 68 and off at 72.\n\t\t\t",
          },
          {
            genre: "config",
            index: "2",
            label: "Differential",
            max: "4",
            min: "0",
            size: "1",
            type: "byte",
            value: "2",
            Help:
              "\n\t\t\t\tDifferential is the difference needed from the swing before the 2nd stage kicks in.\n\t\t\t\tEG: A swing of 2, differntial of 2, and setpoint of 70 means the heat turns on at 68 and off at 72. The second-stage heat would turn on at 67 and off at 68.\n\t\t\t",
          },
          {
            genre: "config",
            index: "3",
            label: "Set filter counter",
            max: "4000",
            min: "500",
            type: "short",
            value: "500",
            Help:
              "How many hours before the filter change reminder is displayed.",
          },
          {
            genre: "config",
            index: "4",
            label: "Report filter counter",
            read_only: "true",
            type: "short",
            value: "0",
            Help:
              "How many hours the system has run since the filter counter was last reset. Read only.",
          },
          {
            genre: "config",
            index: "5",
            label: "Celsius/Fahrenheit",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help: "Celsius or Fahrenheit.",
            Item: [
              { label: "Celsius", value: "0" },
              { label: "Fahrenheit", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "14",
            label: "Dead band",
            max: "6",
            min: "3",
            size: "1",
            type: "byte",
            value: "4",
            Help:
              "\n\t\t\t\tOn thermostats that automatically control both heating and cooling systems,\n\t\t\t\ta dead band is a temperature range in which neither system turns on. The dead\n\t\t\t\tband prevents the thermostat from activating heat and cooling in rapid\n\t\t\t\tsuccession. This conserves energy by providing a range of temperatures\n\t\t\t\trequiring no energy consumption.\n\t\t\t\tDead band value:\n\t\t\t\t3(0x03)= 3 F / 1.5 C\n\t\t\t\t4(0x04)= 4 F / 2.0 C\n\t\t\t\t5(0x05)= 5 F / 2.5 C\n\t\t\t\t6(0x06)= 6 F / 3.0 C\n\t\t\t",
          },
          {
            genre: "config",
            index: "6",
            label: "Upper limit of heat set point",
            type: "short",
            value: "950",
            Help:
              "\n\t\t\t\tUnit in C:\n\t\t\t\tRange from 5 to [(37 ) - (dead band)]\n\t\t\t\tRange from 50 (0x0032) to 355 (0x0163)\n\t\t\t\tExample 28 ; input = 280 (0x0118)\n\t\t\t\t\n\t\t\t\tUnit in F:\n\t\t\t\tRange from 41 to [(99 ) - (dead band)]\n\t\t\t\tRange from 410 (0x019A) to 960 (0x03C0)\n\t\t\t\tExample 82 ; input = 820 (0x0334)\n\t\t\t\tDefault = (99 ) - (dead band)\n\t\t\t",
          },
          {
            genre: "config",
            index: "7",
            label: "Lower limit of cool set point",
            type: "short",
            value: "440",
            Help:
              "\n\t\t\t\tUnit in C:\n\t\t\t\tRange from [(5 C) + (dead band)] to 37 C\n\t\t\t\tRange from 65 (0x0041) to 370 (0x0172)\n\t\t\t\tExample 20 C; input = 200 (0x00C8)\n\n\t\t\t\tUnit in F:\n\t\t\t\tRange from [(41 F) + (dead band)] to 99 F\n\t\t\t\tRange from 440 (0x01B8) to 990 (0x03DE)\n\t\t\t\tExample 68 F; input = 680 (0x02A8)\n\t\t\t\tDefault = (41 F) + (dead band)\n\t\t\t",
          },
          {
            genre: "config",
            index: "8",
            label: "Easy Mode",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Easy mode hides advanced features on the thermostat interface.",
            Item: [
              { label: "Off", value: "0" },
              { label: "On", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "9",
            label: "Time Format",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help: "Use the 24 hour or 12 hour (am/pm) time format.",
            Item: [
              { label: "24 hour", value: "0" },
              { label: "12 hour (am/pm)", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "10",
            label: "Repeat basic set counter",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              '\n\t\t\t\tRepeat basic set counter (Association Group A and B only)\n\t\t\t\tValue(X): 0 (0x00), 3 (0x03) to 255 (0xFF)\n\t\t\t\t0 (0X00) = Disable, default\n\t\t\t\t3 (0x03) to 255 (0xFF) minutes\n\t\t\t\t(Thermostat sends "Basic Set" command to its association node repeatedly in every X minutes)\n\t\t\t',
          },
          {
            genre: "config",
            index: "11",
            label: "Auto report trigger threshold",
            max: "8",
            min: "0",
            size: "1",
            type: "byte",
            value: "4",
            Help:
              "\n\t\t\t\tTrigger AUTO report if room temperature is different from last\n\t\t\t\treport.\t(It will report room temperature only)\n\t\t\t\t*User can use this function to enhance batteries service life\n\t\t\t\t0 (0x00) = disable AUTO report if room temperature is different from last report.\n\t\t\t\tAUTO report if room temperature is different from last report.\n\t\t\t\tDelta change is >=\n\t\t\t\t1 (0x01) = 1 F (0.5 C)\n\t\t\t\t2 (0x02) = 2 F (1.0 C)\n\t\t\t\t3 (0x03) = 3 F (1.5 C)\n\t\t\t\t4 (0x04) = 4 F (2.0 C), (default)\n\t\t\t\t5 (0x05) = 5 F (2.5 C)\n\t\t\t\t6 (0x06) = 6 F (3.0 C)\n\t\t\t\t7 (0x07) = 7 F (3.5 C)\n\t\t\t\t8 (0x08) = 8 F (4.0 C)\n\t\t\t",
          },
          {
            genre: "config",
            index: "12",
            label: "Auto report time interval",
            max: "16",
            min: "0",
            size: "1",
            type: "byte",
            value: "2",
            Help:
              "\n\t\t\t\tAUTO report by time interval. (It will report room temperature only)\n\t\t\t\t*User can use this function to enhance batteries service life.\n\t\t\t\t0 (0x00) = disable AUTO report function. (by time interval)\n\t\t\t\tAUTO report timer:\n\t\t\t\t1 (0x01) = 0.5 hr\n\t\t\t\t2 (0x02) = 1.0 hr, (default)\n\t\t\t\t3 (0x03) = 1.5 hrs\n\t\t\t\t4 (0x04) = 2.0 hrs\n\t\t\t\t5 (0x05) = 2.5 hrs\n\t\t\t\t6 (0x06) = 3.0 hrs\n\t\t\t\t7 (0x07) = 3.5 hrs\n\t\t\t\t8 (0x08) = 4.0 hrs\n\t\t\t\t9 (0x09) = 4.5 hrs\n\t\t\t\t10 (0x0A) = 5.0 hrs\n\t\t\t\t11 (0x0B) = 5.5 hrs\n\t\t\t\t12 (0x0C) = 6.0 hrs\n\t\t\t\t13 (0x0D) = 6.5 hrs\n\t\t\t\t14 (0x0E) = 7.0 hrs\n\t\t\t\t15 (0x0F) = 7.5 hrs\n\t\t\t\t16 (0x10) = 8.0 hrs\n\t\t\t",
          },
          {
            genre: "config",
            index: "13",
            label: "sensor temperature calibration",
            max: "10",
            min: "-10",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "\n\t\t\t\tThis parameter is used to change the display temperature\n\t\t\t\tto match with your previous thermostat, or to match another\n\t\t\t\tthermostat already in your home\n\t\t\t\tFormula: Display temperature = sensor reading value + offset value\n\t\t\t\t0 (0x00) = 0 F (default)\n\t\t\t\t1 (0x01) = 1 F (0.5 C)\n\t\t\t\t2 (0x02) = 2 F (1.0 C)\n\t\t\t\t3 (0x03) = 3 F (1.5 C)\n\t\t\t\t4 (0x04) = 4 F (2.0 C)\n\t\t\t\t5 (0x05) = 5 F (2.5 C)\n\t\t\t\t6 (0x06) = 6 F (3.0 C)\n\t\t\t\t7 (0x07) = 7 F (3.5 C)\n\t\t\t\t8 (0x08) = 8 F (4.0 C)\n\t\t\t\t9 (0x09) = 9 F (4.5 C)\n\t\t\t\t10 (0x0A) = 10 F (5.0 C)\n\t\t\t\t-1 (0xFF) = -1 F (-0.5 C)\n\t\t\t\t-2 (0xFE) = -2 F (-1.0 C)\n\t\t\t\t-3 (0xFD) = -3 F (-1.5 C)\n\t\t\t\t-4 (0xFC) = -4 F (-2.0 C)\n\t\t\t\t-5 (0xFB) = -5 F (-2.5 C)\n\t\t\t\t-6 (0xFA) = -6 F (-3.0 C)\n\t\t\t\t-7 (0xF9) = -7 F (-3.5 C)\n\t\t\t\t-8 (0xF8) = -8 F (-4.0 C)\n\t\t\t\t-9 (0xF7) = -9 F (-4.5 C)\n\t\t\t\t-10 (0xF6) = -10 F (-5.0 C)\n\t\t\t",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "3",
            Group: [
              {
                auto: "false",
                index: "1",
                label:
                  "Heating Mode group. All associated nodes will recieve basic set command ON and OFF when heat is triggered/deactivated.",
                max_associations: "5",
              },
              {
                index: "2",
                label:
                  "Cooling Mode group. All associated nodes will recieve basic set command ON and OFF when cooling is triggered/deactivated.",
                max_associations: "5",
              },
              {
                auto: "true",
                index: "3",
                label:
                  "Auto-report Group. Your controller/gateway should be associated in this group. All status changes will be reported to this node",
                max_associations: "1",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
