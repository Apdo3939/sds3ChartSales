package com.apdo3939.chartSales.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.apdo3939.chartSales.dtos.SaleDTO;
import com.apdo3939.chartSales.entities.Sale;
import com.apdo3939.chartSales.repositories.SaleRepository;

@Service
public class SaleService {
	
	@Autowired
	private SaleRepository repository;

	
	public List<SaleDTO> findAll(){
		List<Sale> result = repository.findAll();
		return result.stream().map(x -> new SaleDTO(x)).collect(Collectors.toList());
	}
}
