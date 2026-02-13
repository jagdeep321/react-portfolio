import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";

const Experience = ()=>{
    return(
   <div id="experience">
      <div class="experienceme">
        <h1 class="prof">💼 Professional Experience</h1>
      </div>

      <div class="experiencebottom">
        <div class="same experiencecart1">
          <div class="parentcart1">
            <h1 class="childcart1">Software Developer</h1>
            <div>
              <i class=" location fas fa-map-marker-alt"><FaMapMarkerAlt /></i>
              <label class="ksj">KSJ At Sirsa</label>
            </div>
            <div>
              <i class=" calender	far fa-calendar-alt"> <FaRegCalendarAlt /></i>
              <label class="present">FEB 2025 - PRESENT</label>
            </div>
          </div>
        </div>

        <div class="same experiencecart2">
          <div class="parentcart1">
            <h1 class="childcart1">Software Developer</h1>
            <div>
              <i class=" location fas fa-map-marker-alt"><FaMapMarkerAlt /> </i>
              <label class="ksj">PIP Trade, Delhi</label>
            </div>
            <div>
              <i class=" calender	far fa-calendar-alt"> <FaRegCalendarAlt /></i>
              <label class="present">FEB 2024 - FEB 2025</label>
            </div>
          </div>

        </div>
        <div class="same experiencecart3">

          <div class="parentcart1">
            <h1 class="childcart1">MERN STACK DEVELOPER</h1>
            <div>
              <i class=" location fas fa-map-marker-alt"> <FaMapMarkerAlt /> </i>
              <label class="ksj">Northline, Hyderabad</label>
            </div>
            <div>
              <i class=" calender	far fa-calendar-alt"><FaRegCalendarAlt /></i>
              <label class="present">AUG 2023 - FEB 2024</label>
            </div>
          </div>

        </div>
        <h1 class="education">🎓 Education</h1>
        <div class="same educationcart1">
          <div class="parentcart1">
            <h1 class="childcart1">METRICULATION</h1>
            <div>
              <i class=" location fas fa-map-marker-alt"> <FaMapMarkerAlt /></i>
              <label class="school">VIDYA BHARTI, MANSA</label>
            </div>
            <div>
              <i class=" calender	far fa-calendar-alt"><FaRegCalendarAlt /></i>
              <label class="period">APRIL 2019 - JULY 2020</label>
            </div>
          </div>
        </div>
        <div class="same educationcart2">

          <div class="parentcart1">
            <h1 class="childcart1">SENIOR SECONDARY</h1>
            <div>
              <i class=" location fas fa-map-marker-alt"> <FaMapMarkerAlt /></i>
              <label class="school">VIDYA BHARTI, MANSA</label>
            </div>
            <div>
              <i class=" calender	far fa-calendar-alt"><FaRegCalendarAlt /></i>
              <label class="period">APRIL 2021 - JULY 2022</label>
            </div>
          </div>

        </div>
        <div class="same educationcart3">
          <div class="parentcart1">
            <h1 class="childcart1">COMPUTER APPLICATIONS</h1>
            <div>
              <i class=" location fas fa-map-marker-alt"><FaMapMarkerAlt /></i>
              <label class="school">PUNJABI UNIVERSITY</label>
            </div>
            <div>
              <i class=" calender	far fa-calendar-alt"><FaRegCalendarAlt /></i>
              <label class="period">JULY 2023 - JULY 2026</label>
            </div>
          </div>


        </div>
      </div>
    </div>

    )
}
export default Experience