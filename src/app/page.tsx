'use client'

import { Amplify, Auth, API, DataStore } from 'aws-amplify'
import { useEffect } from 'react'
import awsExports from "@/aws-exports"
import { Projects, ProjectEnums } from '@/models';

Amplify.configure(awsExports)

export default function Home() {
  useEffect(()=> {
    const login = async () => {
      
      // await Auth.signUp({
      //   username: "nico.06.89crc@gmail.com",
      //   password: "fGksFjFFrb!@t89",
      //   attributes: {
      //     name: 'NicolasTest',
      //     family_name: 'FernandezTest'
      //   }
      // });
      
      // await Auth.confirmSignUp("nico.06.89crc@gmail.com", "709919");
      
      const user = await Auth.signIn("nico.06.89crc@gmail.com", "fGksFjFFrb!@t89");
      console.log(user);
      

      async function getData() {
        const apiName = 'apiae2f4b6c';
        const path = '/projects/:';
        const myInit = {
          headers: {
            Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`
          }
        };
      
        return await API.get(apiName, path, myInit);
      }

      async function postProject() {
        const user = await Auth.currentAuthenticatedUser();
        const res = await DataStore.save(
          new Projects({
            "title": "333Lorem ipsum dolor sit amet",
            "description": "333Lorem ipsum dolor sit amet",
            "status": ProjectEnums.ACTIVE,
            "projectsProjectUserId": user.attributes.sub
          })
        );

        console.log(res);
        
      }
      
      // getData();
      postProject();
    }
    
    login();
  },[]);

  return (
    <h1>Hola ss</h1>
  )
}
