import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import EmployeesBarChart from '../Components/EmployeesChart'
import Wrapper from '../assets/wrappers/OrganizationStatistics'
import { supabase } from '../utils/supabaseConfig'
import RolesChart from '../Components/RolesChart'

const OrganizationStatistics = () => {
  const [employees, setEmployees] = useState([])
  const [roles, setRoles] = useState([])
  const [selectedRole, setSelectedRole] = useState('')
  const { organizationId } = useParams()

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/org/${organizationId}/employees`
        )

        const data = await response.json()
        setEmployees(data)
      } catch (error) {
        console.log(error)
      }
    }

    const fetchRoles = async () => {
      try {
        let { data: Roles, error } = await supabase
          .from('Roles')
          .select('*')
          .eq('organization', organizationId)
        setRoles(Roles)
        setSelectedRole(Roles[0])
        setSelectedRole(Roles[0])
      } catch (error) {
        console.log(error)
      }
    }

    fetchEmployees()
    fetchRoles()
  }, [])
  }, [])

  if (!roles) return
  if (!roles) return

  const navLinks = [
    { text: 'Home', link: '/organization' },
    { text: 'Statistics', link: `/organization/statistics/${organizationId}` },
  ]
  console.log(selectedRole.id)
  console.log(selectedRole.id)
  return (
    <Wrapper className='page'>
      <Navbar links={navLinks} />
      <section className='empl-top'>
        <EmployeesBarChart employees={employees} />
      </section>
      <section className='roles'>
        <h1>Select Role:</h1>
        <select
          onChange={(e) => {
            let x, org
            for (const { name, id, organization } of roles) {
              if (name === e.target.value) {
                x = id
                org = organization
              }
            }
            setSelectedRole({ name: e.target.value, id: x, organization: org })
            console.log(e.target.value, selectedRole)
          }}
          onChange={(e) => {
            let x, org
            for (const { name, id, organization } of roles) {
              if (name === e.target.value) {
                x = id
                org = organization
              }
            }
            setSelectedRole({ name: e.target.value, id: x, organization: org })
          }}
        >
          {roles.map((role) => (
            <option key={role.id} value={role.name}>
              {role.name}
            </option>
            <option key={role.id} value={role.name}>
              {role.name}
            </option>
          ))}
        </select>

        {selectedRole && (
          <section className='role-stats'>
            <div className='average-stats'>
              <h1>Median work hours: </h1>
              <h1>Average work hours: </h1>
            </div>

            <div className='roles-chart'>
              <RolesChart roleId={selectedRole.id}></RolesChart>
              <RolesChart roleId={selectedRole.id}></RolesChart>
            </div>
          </section>
        )}
      </section>
    </Wrapper>
  )
}

export default OrganizationStatistics
