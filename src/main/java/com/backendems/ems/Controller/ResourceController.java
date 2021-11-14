package com.backendems.ems.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ResourceController {
	
	@RequestMapping("/hellouser")
	public String getUser()
	{
		return "user";
	}
	
	@RequestMapping("/helloadmin")
	public String getAdmin()
	{
		return "admin";
	}

}
